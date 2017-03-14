'use strict';

 //Load controller
  angular.module('inspinia')

	.controller('FlightDeptController', ['$scope',function($scope) {
		
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
                  {name:'make',index:'make', editable: true, width:90, sorttype:"date", formatter:"date"},
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
  }]);