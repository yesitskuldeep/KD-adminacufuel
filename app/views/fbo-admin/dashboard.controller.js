'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('DashboardController', function($scope, FBOAdmin) {
	    $(document).ready(function(){
          $('.i-checks').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green',
          });
      });
    
    	$scope.userName = 'Dylan Goodwin';
      $scope.essAccountId = true;
      $("#esAccId").css({ opacity: 0.5 });
      $scope.user = {};
      $scope.feature = {};
      $scope.feature.level = 'silver';
      $scope.feature.essintaPosSystem = false;
      $scope.feature.acuQuote = false;
      $scope.feature.acuTrack = false;
      $scope.feature.fuelProgram = false;
      $scope.feature.amstatIntegration = false;
      $scope.feature.posAccountingIntegration = false;
      $scope.feature.posVeederRootIntegration = false;
      $scope.userData = function(){
          console.log("daadada", $scope.feature)

          if($scope.status == true){
            $scope.user.status = 'active';
          }else{
            $scope.user.status = 'inactive';
          }
          $scope.user.username = $scope.user.email;
          $scope.user.userType = 'fbo';
          console.log($scope.user)
          var formdata = "companyName=" + $scope.user.companyName + "&email=" + $scope.user.email + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&password=" + $scope.user.password + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&clientNote=" + $scope.user.clientNote;
          FBOAdmin.registerUser(formdata).then(function(result) {
            
            $scope.feature.accountId = result;
            var featureControlData = "accountId=" + $scope.feature.accountId + "&level=" + $scope.feature.level + "&essintaPosSystem=" + $scope.feature.essintaPosSystem 
            + "&acuQuote=" + $scope.feature.acuQuote + "&acuTrack=" + $scope.feature.acuTrack + "&fuelProgram=" + $scope.feature.fuelProgram + "&amstatIntegration=" + $scope.feature.amstatIntegration+ "&posAccountingIntegration=" 
            + $scope.feature.posAccountingIntegration + "&posVeederRootIntegration=" + $scope.feature.posVeederRootIntegration 
            + "&essintaAccountUid=" + $scope.feature.essintaAccountUid + "&additionalLicences=" + $scope.feature.additionalLicences;
            
            FBOAdmin.featureControl(featureControlData).then(function(response) {
              console.log(response)
                
            })
          })
      }

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

    });