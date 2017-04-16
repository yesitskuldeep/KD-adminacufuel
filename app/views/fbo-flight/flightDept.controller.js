'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('FlightDeptController', function ($scope, $uibModal, FBOFlight) {
      $scope.data = {};
      $scope.user = {};
      $scope.aircraft = {};
      $scope.userData = function(){
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
          $scope.user.userType = 'flightDetp';
          console.log($scope.user)
          var formdata = "companyName=" + $scope.user.companyName + "&email=" + $scope.user.email + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&password=" + $scope.user.password + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&clientNote=" + $scope.user.clientNote;
          FBOFlight.registerUser(formdata).then(function(result) {
            $scope.registerId = result;
            $scope.data.accountId = $scope.registerId;
            $scope.aircraft.accountId = $scope.registerId;
            toastr.success('Created Successfully', {
              closeButton: true
            })
            $state.go('index.flightDept');
          }, function (err) {
              toastr.error('Error in registering', {
                closeButton: true
              })
          });
        }
      }

      $scope.data.cardType = 'creditCard';
      var cardData = {}
      cardData.paymentMethodList = [];
      $scope.addCard = function(){
        if($scope.aircraft.accountId == undefined){
          toastr.error('Please Add Contact Information', {
            closeButton: true
          })
        }else{
          cardData.paymentMethodList.push($scope.data);
          console.log("cardData", cardData);
          FBOFlight.addCardInformation(cardData).then(function(result) {
            console.log(result)
              toastr.success('Created Successfully', {
                closeButton: true
              })
          })
        }
        
      }

      getData();
      function getData(){
        FBOFlight.getAircraftMake().then(function(result) {
          $scope.aircraftMakeList = result;
          $scope.aircraft.make = $scope.aircraftMakeList[0];
          FBOFlight.getModal($scope.aircraft.make).then(function(result) {
            $scope.aircraftModalList = result;
            $scope.aircraft.model = $scope.aircraftModalList[0];
              FBOFlight.getAircraftSize($scope.aircraft.make, $scope.aircraft.model).then(function(result) {
                $scope.aircraftSizeList = result;
                $scope.aircraft.size = $scope.aircraftSizeList[0];
              })
          })
            
        })
      }
      

      $scope.getModal = function(){
        var makeId = $scope.aircraft.make;
        FBOFlight.getModal(makeId).then(function(result) {
          $scope.aircraftModalList = result;
          $scope.aircraft.model = $scope.aircraftModalList[0];
            FBOFlight.getAircraftSize(makeId, $scope.aircraft.model).then(function(result) {
              $scope.aircraftSizeList = result;
              $scope.aircraft.size = $scope.aircraftSizeList[0];
            })
        })
      }

      $scope.getSize = function(){
        FBOFlight.getAircraftSize($scope.aircraft.make, $scope.aircraft.model).then(function(result) {
          $scope.aircraftSizeList = result;
          $scope.aircraft.size = $scope.aircraftSizeList[0];
        })
      }

      $scope.openModal = function(){
        if($scope.aircraft.accountId == undefined){
          toastr.error('Please Add Contact Information', {
            closeButton: true
          })
          $('#myModal4').modal('hide');
        }else{
          $('#myModal4').modal('show');
        }
        
      }
      $scope.aircraftData = {};
      $scope.aircraftData.aircraftList = [];
      $scope.getCraftList = [];
      $scope.addAircraft = function(){
        $scope.aircraftData.aircraftList.push($scope.aircraft);
        if ($scope.getCraftList.indexOf($scope.aircraft) == -1) {
            $scope.getCraftList.push($scope.aircraft);
        }
        
        FBOFlight.addAircraft($scope.aircraftData).then(function(result) {
          $('#myModal4').modal('hide');
          $scope.reset();
          toastr.success('Created Successfully', {
            closeButton: true
          })
        }, function (err) {
            toastr.error('Error in Adding Aircraft', {
              closeButton: true
            })
            $('#myModal4').modal('hide');
            $scope.getCraftList.splice($scope.aircraft);
        });
        
      }

      $scope.reset = function() {
        $scope.aircraft = {};
        $scope.aircraft.accountId = $scope.data.accountId;
        $scope.aircraftData.aircraftList = [];
        getData();
      }
  });