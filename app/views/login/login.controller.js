'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('LoginController', function ($scope, LoginService) {
      
      $scope.user = {};
      $scope.userData = function(){
          
          LoginService.loginUser($scope.user).then(function(result) {
            console.log(result)
              
          })
      }
      
  });