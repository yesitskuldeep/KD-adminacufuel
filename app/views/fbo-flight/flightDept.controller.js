'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('FlightDeptController', function ($scope, FBOFlight) {
		FBOFlight
      $(document).ready(function(){
            // Examle data for jqGrid

          var mydata = [
              {tail: "N2722D", make: "", model: "", size: ""} ,
              {tail: "N615ME", make: "", model: "", size: ""},
              {tail: "N827TY", make: "", model: "", size: ""},
              {tail: "N765TR", make: "", model: "", size: ""},
              {tail: "N8712G", make: "", model: "", size: ""}
          ];

          // Configuration for jqGrid Example 2
          $("#table_list_2").jqGrid({
              data: mydata,
              datatype: "local",
              height: 140,
              autowidth: true,
              shrinkToFit: true,
              rowNum: 5,
              rowList: [10, 20, 30],
              colNames:['Tail #','Make', 'Model', 'Size'],
              colModel:[
                  {name:'tail',index:'tail', editable: true, width:60, sorttype:"int",search:true},
                  { name: 'make', index: 'make', width: 80, formatter: 'select', edittype: 'select', editoptions: { value: "1:One;2:Two"} },
                  {name:'model',index:'model', editable: true, width:100},
                  {name:'size',index:'size', editable: true, width:80, align:"right",sorttype:"int"},
              ],
              pager: "#pager_list_2",
              viewrecords: true,
              caption: "AIRCRAFT LIST",
              add: true,
              edit: true,
              addtext: 'Add',
              edittext: 'Edit',
              hidegrid: false
          });

          // Add selection
          $("#table_list_2").setSelection(4, true);


          // Setup buttons
          $("#table_list_2").jqGrid('navGrid', '#pager_list_2',
                  {edit: true, add: true, del: true, search: true},
                  {height: 200, reloadAfterSubmit: true}
          );

          // Add responsive to jqGrid
          $(window).bind('resize', function () {
              var width = $('.jqGrid_wrapper').width();
              $('#table_list_2').setGridWidth(width);
          });


          setTimeout(function(){
              $('.wrapper-content').removeClass('animated fadeInRight');
          },700);
      });
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