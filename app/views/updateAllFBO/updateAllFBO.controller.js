'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('updateAllFBOController', function($scope, $stateParams, UpdateAllFBO) {
	    $(document).ready(function(){
          $('.i-checks').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green',
          });

      });

      var userProfileID = $stateParams.id;
      UpdateAllFBO.getALlFBOData(userProfileID).then(function(result) {
        console.log(result)
        $scope.user = result;
        $scope.user.userTypeId = result.userType.id;
        $scope.feature = result.accountFeatureControl;
        if($scope.feature.essintaPosSystem == true){
          $scope.essAccountId = false;
          $("#esAccId").css({ opacity: 1 });
        }else{
          $scope.essAccountId = true;
          delete $scope.feature.essintaAccountUid;
          $("#esAccId").css({ opacity: 0.5 });
        }
        UpdateAllFBO.getNotes(userProfileID).then(function(response) {
          $scope.user.clientNote = response[0].notes
          $scope.user.userNoteId = response[0].id;
        })
        console.log($scope.feature,"dsdsdsds")
        if($scope.user.account.user.status == 'ACTIVE'){
          $scope.status = true;
        }else {
          $scope.status = false;
        }
      })

      $scope.enableEssId = function(){
          if($scope.feature.essintaPosSystem == true){
            $scope.essAccountId = false;
            $("#esAccId").css({ opacity: 1 });
          }else{
            $scope.essAccountId = true;
            delete $scope.feature.essintaAccountUid;
            $("#esAccId").css({ opacity: 0.5 });
          }
      }

      $scope.userData = function(){
        console.log($scope.user.userTypeId)

          if($scope.user.account.user.status == 'ACTIVE'){
            $scope.user.status = 'active';
          }else{
            $scope.user.status = 'inactive';
          }
          $scope.user.username = $scope.user.email;
          $scope.user.userType = 'fbo';
          console.log($scope.user)
          var updateData = "companyName=" + $scope.user.companyName + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&userNote=" + $scope.user.clientNote + "&userNoteId=" + $scope.user.userNoteId + "&userTypeId=" + $scope.user.userTypeId;
          UpdateAllFBO.updateUser(updateData).then(function(result) {
            console.log(result)
            console.log(JSON.stringify(result));
            $scope.feature.accountId = result;
            var updatefeatureControlData = "accountId=" + $scope.feature.accountId + "&level=" + $scope.feature.level + "&essintaPosSystem=" + $scope.feature.essintaPosSystem 
            + "&acuQuote=" + $scope.feature.acuQuote + "&acuTrack=" + $scope.feature.acuTrack + "&fuelProgram=" + $scope.feature.fuelProgram + "&amstatIntegration=" + $scope.feature.amstatIntegration+ "&posAccountingIntegration=" 
            + $scope.feature.posAccountingIntegration + "&posVeederRootIntegration=" + $scope.feature.posVeederRootIntegration 
            + "&essintaAccountUid=" + $scope.feature.essintaAccountUid + "&additionalLicences=" + $scope.feature.additionalLicences + "&accountFeatureControlId=" + $scope.feature.id;
            
            UpdateAllFBO.updatefeatureControl(updatefeatureControlData).then(function(response) {
              console.log(response)
                
            })
          })
      }

  });