'use strict';

 //Load controller
  angular.module('acuefuel')

	.controller('fboClientsController', function($scope, $stateParams, FBOClient) {
  	    $(document).ready(function(){
  	      	$('.tab-pane').slimScroll({
    		        height: '600px'
    		    });
      	});
        $('#tab-2').css('display', 'none');
        getAllFbo();
        function getAllFbo(){
          FBOClient.getALlFBOList().then(function(result) {
            console.log(result)
            $scope.fboClient = result;
            $scope.clientLength = result.length;
          })
        }

        $scope.searchData = function(){
          var userType = $('#tabClient > li.active > a').attr('id');
          searchClient($scope.searchQuery, userType);
        }
        
        function searchClient(searchData, userType){
          console.log(userType)
          if(searchData == null || searchData == undefined || searchData == "" && userType == 'fbo'){
            getAllFbo();
          }else if(searchData == null || searchData == undefined || searchData == "" && userType == 'flightDetp'){
            $scope.fboDept();
          }else{
            var data = {
              "query" : searchData,
              "userType" : userType
            }
            FBOClient.getSearchClient(data).then(function(result) {
              for(var i=0; i<result.length; i++){
                result[i].user = [];
                result[i].user.companyName = result[i].companyName;
                result[i].user.firstName = result[i].firstName;
                result[i].user.lastName = result[i].lastName;
                result[i].user.id = result[i].id;
                result[i].user.account = [];
                result[i].user.account.user = [];
                result[i].user.account.user.status = result[i].account.user.status;
              }
              if(userType == 'fbo'){
                $scope.fboClient = result;
                console.log(result)
                $scope.clientLength = result.length;
              }else{
                $scope.fboDeptList = result;
                $scope.clientLength = result.length;
              }
            })
          }
          
        }

      	$scope.fboAdmin = function(){
          getAllFbo();
      		$('#tab-1').css('display', 'block');
      		$('#tab-2').css('display', 'none');
      		$('.customTab1').addClass('active');
      		$('.customTab2').removeClass('active');
      		$('.slimScrollDiv:first-child').css('display', 'block');

      	}

      	$scope.fboDept = function(){
          FBOClient.getAllFlightDeptList().then(function(result) {
            console.log(result)
            $scope.fboDeptList = result;
            $scope.clientLength = result.length;
          })
      		$('#tab-1').css('display', 'none');
      		$('#tab-2').css('display', 'block');
      		$('.customTab2').addClass('active');
      		$('.customTab1').removeClass('active');
      		$('.slimScrollDiv:first-child').css('display', 'none');
      	}

  });