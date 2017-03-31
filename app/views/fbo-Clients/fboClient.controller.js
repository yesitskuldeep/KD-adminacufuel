'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('fboClientsController', function($scope, $stateParams, UpdateAllFBO) {
	    $(document).ready(function(){
	      	$('.tab-pane').slimScroll({
		        height: '600px'
		    });
      	});

      	$scope.fboAdmin = function(){
      		$('#tab-1').css('display', 'block');
      		$('#tab-2').css('display', 'none');
      		$('.customTab1').addClass('active');
      		$('.customTab2').removeClass('active');
      		$('.slimScrollDiv:first-child').css('display', 'block');

      	}

      	$scope.fboDept = function(){
      		$('#tab-1').css('display', 'none');
      		$('#tab-2').css('display', 'block');
      		$('.customTab2').addClass('active');
      		$('.customTab1').removeClass('active');
      		$('.slimScrollDiv:first-child').css('display', 'none');
      	}

  });