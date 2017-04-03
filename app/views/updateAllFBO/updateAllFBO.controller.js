'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('updateAllFBOController', function($scope, $stateParams, UpdateAllFBO) {
	    $(document).ready(function(){
          $('.i-checks').iCheck({
              checkboxClass: 'icheckbox_square-green',
              radioClass: 'iradio_square-green',
          });

      });

      var userProfileID = $stateParams.id;
      UpdateAllFBO.getALlFBOData(userProfileID).then(function(result) {
        console.log(result)
        $scope.user = result;
        $scope.feature = result.accountFeatureControl;
        console.log($scope.feature,"dsdsdsds")
        if($scope.user.account.user.status == 'ACTIVE'){
          $scope.status = true;
        }else {
          $scope.status = false;
        }
      })

  });