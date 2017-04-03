'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('LoginController', function ($scope, $state, LoginService) {
      
      $scope.user = {};
      $scope.userData = function(){
          
          var loginData = "username=" + $scope.user.username + "&password=" + $scope.user.password;
          LoginService.loginUser(loginData).then(function(result) {
            console.log(result)
            $state.go('index.dashboard');
            //$state.go('index.dashboard');
            // if(typeof result == 'object') {
            //     // LoginService.authenticate();
            //     // LoginService.setAuth(true);
            //     // $rootScope.path = true;
            //     $state.go('index.dashboard');
            //     // var reqPwdChng = localStorage.getItem("requiredChangePwd");
            //     // if (reqPwdChng && reqPwdChng == "Y") {
            //     //     $state.go('resetPassword');
            //     // } else {
            //     //     $state.go('app.upload');
            //     // }
            // } else {
            //     //toastr.info("Error in login. Please check login name and password");
            // }
          })
          
      }
      
  });