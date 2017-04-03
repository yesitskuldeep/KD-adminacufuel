'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('FlightDeptController', function ($scope, FBOFlight) {
      $scope.data = {};
      $scope.user = {};
      $scope.userData = function(){
          if($scope.status == true){
            $scope.user.status = 'active';
          }else{
            $scope.user.status = 'inactive';
          }
          $scope.user.username = $scope.user.email;
          $scope.user.userType = 'flightDetp';
          console.log($scope.user)
          var formdata = "email=" + $scope.user.email + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&password=" + $scope.user.password + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&clientNote=" + $scope.user.clientNote;
          FBOFlight.registerUser(formdata).then(function(result) {
            $scope.registerId = result;
            $scope.data.accountId = $scope.registerId;
              
          })
      }

      $scope.data.cardType = 'creditCard';
      var cardData = {}
      cardData.paymentMethodList = [];
      $scope.addCard = function(){
        cardData.paymentMethodList.push($scope.data);
        console.log("cardData", cardData);
        FBOFlight.addCardInformation(cardData).then(function(result) {
          console.log(result)
            
        })
      }
      
      
  });