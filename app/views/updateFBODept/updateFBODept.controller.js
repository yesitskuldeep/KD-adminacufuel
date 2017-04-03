'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('updateFBODeptController', function($scope, $stateParams, UpdateAllFBODept) {

      var userProfileID = $stateParams.id;
      UpdateAllFBODept.getALlFBOData(userProfileID).then(function(result) {
        console.log(result)
        $scope.user = result;
        UpdateAllFBODept.getNotes(userProfileID).then(function(response) {
          $scope.user.clientNote = response[0].notes
        })
        // $scope.feature = result.accountFeatureControl;
        // console.log($scope.feature,"dsdsdsds")
        if($scope.user.account.user.status == 'ACTIVE'){
          $scope.status = true;
        }else {
          $scope.status = false;
        }
      })

  });