'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('DashboardController', function($scope, FBOAdmin) {
	    $(document).ready(function(){
          $('.i-checks').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green',
          });
      });
    
    	$scope.userName = 'Dylan Goodwin';
      $scope.essAccountId = true;
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
          var formdata = "email=" + $scope.user.email + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&password=" + $scope.user.password + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&clientNote=" + $scope.user.clientNote;
          FBOAdmin.registerUser(formdata).then(function(result) {
            //console.log(result)
            // $scope.feature.accountId = result;
            // FBOAdmin.featureControl(formdata).then(function(response) {
            //   console.log(response)
                
            // })
          })
      }

      $scope.enableEssId = function(){
          if($scope.feature.essintaPosSystem == true){
            $scope.essAccountId = false;
          }else{
            $scope.essAccountId = true;
            delete $scope.feature.essintaAccountUid;
          }
      }

    });