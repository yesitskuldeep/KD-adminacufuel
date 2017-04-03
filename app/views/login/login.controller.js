'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('LoginController', function ($scope, $state, LoginService) {
      
      $scope.user = {};
      $scope.userData = function(){
          
          var loginData = "username=" + $scope.user.username + "&password=" + $scope.user.password;
          LoginService.loginUser(loginData).then(function(result) {
                LoginService.authenticate();
                LoginService.setAuth(true);
                
          })
          
      }
      
  });