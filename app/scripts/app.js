/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'ui.bootstrap',                 // Bootstrap
        'ngFileUpload'					// File Upload
    ])

    .directive('icheck', ['$timeout', '$parse', function($timeout, $parse) {
	    return {
	      restrict: 'A',
	      require: '?ngModel',
	      link: function(scope, element, attr, ngModel) {
	        $timeout(function() {
	          var value = attr.value;
	        
	          function update(checked) {
	            if(attr.type==='radio') { 
	              ngModel.$setViewValue(value);
	            } else {
	              ngModel.$setViewValue(checked);
	            }
	          }
	          
	          $(element).iCheck({
	            checkboxClass: attr.checkboxClass || 'icheckbox_square-green',
	            radioClass: attr.radioClass || 'iradio_square-green'
	          }).on('ifChanged', function(e) {
	            scope.$apply(function() {
	              update(e.target.checked);
	            });
	          });

	          scope.$watch(attr.ngChecked, function(checked) {
	            if(typeof checked === 'undefined') checked = !!ngModel.$viewValue;
	            update(checked)
	          }, true);

	          scope.$watch(attr.ngModel, function(model) {
	            $(element).iCheck('update');
	          }, true);
	          
	        })
	      }
	    }
  	}])
})();