'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('LoginController', function ($scope, $state, LoginService) {
      
      $scope.user = {};
      $scope.userData = function(){
          
          // LoginService.loginUser($scope.user).then(function(result) {
          //   console.log(result)
              
          // })
          $state.go('index.dashboard');
      }
      
  });