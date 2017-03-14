'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('DashboardController', ['$scope',function($scope) {
		$(document).ready(function(){
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green',
            });
        });
      
      	$scope.userName = 'Dylan Goodwin';

    }]);