'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('updateFBODeptController', function($scope, $stateParams, UpdateAllFBODept, UpdateAllFBO, FBOFlight) {
      $scope.showPayments = true;
      $scope.aircraft = {};
      var userProfileID = $stateParams.id;
      UpdateAllFBODept.getALlFBOData(userProfileID).then(function(result) {
        console.log(result)
        $scope.user = result;
        $scope.aircraft.accountId = result.account.id;
        $scope.user.userTypeId = result.userType.id;
        UpdateAllFBODept.getNotes(userProfileID).then(function(response) {
          $scope.user.clientNote = response[0].notes
          $scope.user.userNoteId = response[0].id;
        })
        // $scope.feature = result.accountFeatureControl;
        // console.log($scope.feature,"dsdsdsds")
        if($scope.user.account.user.status == 'ACTIVE'){
          $scope.status = true;
        }else {
          $scope.status = false;
        }
      })

      UpdateAllFBODept.getAircrafts(userProfileID).then(function(response) {
          $scope.getCraftList = response;
      })

      UpdateAllFBODept.getPaymentMethod(userProfileID).then(function(response) {
          $scope.paymentList = response;

      })

      $scope.openCard = function(payment){
        console.log(payment)
        $scope.showPayments = false;
        $scope.data = {};
        $scope.data.cardNumber = payment.cardNumber;
        $scope.data.cardType = payment.cardType;
        $scope.data.expiryDate = payment.expiryDate;
        $scope.data.id = payment.id;
        $scope.data.accountId = payment.user.account.id;
      }

      var cardData = {}
      cardData.paymentMethodList = [];
      $scope.updateCard = function(){
        console.log($scope.data)
        cardData.paymentMethodList.push($scope.data);
        console.log("cardData", cardData);
        UpdateAllFBODept.updatePaymentMethod(cardData).then(function(result) {
          console.log(result)
            toastr.success('Updated Successfully', {
              closeButton: true
            })
          $scope.reset();
        })
      }


      $scope.reset = function(){
        cardData.paymentMethodList = [];
      }

      $scope.userData = function(){
        console.log($scope.user.userTypeId)

          if($scope.user.account.user.status == 'ACTIVE'){
            $scope.user.status = 'active';
          }else{
            $scope.user.status = 'inactive';
          }
          $scope.user.username = $scope.user.email;
          $scope.user.userType = 'flightDetp';
          console.log($scope.user)
          var updateData = "companyName=" + $scope.user.companyName + "&username=" + $scope.user.username + "&firstName=" + $scope.user.firstName + "&lastName=" + $scope.user.lastName + "&phone=" + $scope.user.phone + "&mobile=" + $scope.user.mobile + "&status=" + $scope.user.status + "&userType=" + $scope.user.userType + "&userNote=" + $scope.user.clientNote + "&userNoteId=" + $scope.user.userNoteId + "&userTypeId=" + $scope.user.userTypeId + "&userProfileId=" + userProfileID;
          UpdateAllFBO.updateUser(updateData).then(function(result) {
            toastr.success(''+result.success+'', {
                closeButton: true
            })
          })
      }

      getData();
      function getData(){
        FBOFlight.getAircraftMake().then(function(result) {
          $scope.aircraftMakeList = result;
          $scope.aircraft.make = $scope.aircraftMakeList[0];
          FBOFlight.getModal($scope.aircraft.make).then(function(result) {
            $scope.aircraftModalList = result;
            $scope.aircraft.model = $scope.aircraftModalList[0];
              
          })
            
        })

        FBOFlight.getAircraftSize().then(function(result) {
          $scope.aircraftSizeList = result;
          $scope.aircraft.size = $scope.aircraftSizeList[0];
            
        })
      }
      

      $scope.getModal = function(){
        var modelId = $scope.aircraft.make
        FBOFlight.getModal(modelId).then(function(result) {
          $scope.aircraftModalList = result;
          $scope.aircraft.model = $scope.aircraftModalList[0];
            
        })
      }
      $scope.aircraftData = {};
      $scope.aircraftData.aircraftList = [];
      $scope.getCraftList = [];
      $scope.addAircraft = function(){
        $scope.aircraftData.aircraftList.push($scope.aircraft);
        console.log($scope.aircraftData.aircraftList)
        if ($scope.getCraftList.indexOf($scope.aircraft) == -1) {
            $scope.getCraftList.push($scope.aircraft);
            
        }
        
        FBOFlight.addAircraft($scope.aircraftData).then(function(result) {
          $('#myModal4').modal('hide');
          $scope.resetData();
          toastr.success('Created Successfully', {
            closeButton: true
          })
        })
      }

      $scope.resetData = function() {
        $scope.aircraft = {};
        $scope.aircraft.accountId = $scope.user.account.id;
        $scope.aircraftData.aircraftList = [];
        getData();
      }

  });