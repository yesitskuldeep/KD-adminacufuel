'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('updateAllFBOController', function($scope, $stateParams, $state, UpdateAllFBO) {
	    $(document).ready(function(){
          $('.i-checks').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green',
          });

      });
      
      $scope.feature = {};
      var userProfileID = $stateParams.id;
      UpdateAllFBO.getALlFBOData(userProfileID).then(function(result) {
        console.log(result)
        $scope.user = result;
        $scope.user.userTypeId = result.userType.id;
        
        if(result.accountFeatureControl != null){
          $scope.feature = result.accountFeatureControl;
          $scope.feature.accountId = result.account.id;
          console.log($scope.feature)
          if($scope.feature.essintaPosSystem == true){
            $scope.essAccountId = false;
            $("#esAccId").css({ opacity: 1 });
          }else{
            $scope.essAccountId = true;
            delete $scope.feature.essintaAccountUid;
            $("#esAccId").css({ opacity: 0.5 });
          }
        }else{
          $scope.feature.accountId = result.account.id;
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
        if($scope.user.email == undefined || $scope.user.email == null){
          toastr.error('Please enter your email first', {
            closeButton: true
          })
        }else if($scope.user.firstName == undefined || $scope.user.firstName == null){
          toastr.error('Please enter your First Name', {
            closeButton: true
          })
        }else{
          if($scope.status == true){
            $scope.user.status = 'active';
          }else{
            $scope.user.status = 'inactive';
          }
          $scope.user.username = $scope.user.email;
          $scope.user.userType = 'fbo';
          console.log($scope.user)
          // if($scope.user.userNoteId == undefined){
          //   $scope.user.userNoteId = null;
          // }
          var updateData = "companyName=" + $scope.user.companyName + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&userNote=" + $scope.user.clientNote + "&userNoteId=" + $scope.user.userNoteId + "&userTypeId=" + $scope.user.userTypeId + "&userProfileId=" + userProfileID;
          UpdateAllFBO.updateUser(updateData).then(function(result) {
            toastr.success(''+result.success+'', {
                closeButton: true
            })
            var updatefeatureControlData = "accountId=" + $scope.feature.accountId + "&level=" + $scope.feature.level + "&essintaPosSystem=" + $scope.feature.essintaPosSystem 
            + "&acuQuote=" + $scope.feature.acuQuote + "&acuTrack=" + $scope.feature.acuTrack + "&fuelProgram=" + $scope.feature.fuelProgram + "&amstatIntegration=" + $scope.feature.amstatIntegration+ "&posAccountingIntegration=" 
            + $scope.feature.posAccountingIntegration + "&posVeederRootIntegration=" + $scope.feature.posVeederRootIntegration 
            + "&essintaAccountUid=" + $scope.feature.essintaAccountUid + "&additionalLicences=" + $scope.feature.additionalLicences + "&accountFeatureControlId=" + $scope.feature.id;
            
            UpdateAllFBO.updatefeatureControl(updatefeatureControlData).then(function(response) {
              console.log(response)
            })
            $state.go('index.fboAdmin');
          })
        }
      }

  });