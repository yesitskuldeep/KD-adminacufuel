/**
 * acuefuel - Responsive Admin Theme
 *
 */
(function () {
    angular.module('acuefuel', [
    	'ngCookies',					// angular-cookies
    	'ngResource',					//angular resouce
    	'ngAnimate',					// angular animate
      'ui.router',          // Routing
      'ui.bootstrap',       // Bootstrap
      'ngFileUpload',				// File Upload
      'angular-loading-bar' //angular loading bar

    ])

    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
      $httpProvider.interceptors.push('myCSRF');
      $httpProvider.interceptors.push('httpRequestInterceptor');
    }])


    .factory('httpRequestInterceptor', ['$q', '$rootScope', '$location', function($q, $rootScope, $location) {
       return {
           request: function($config) {
             return $config;
           },
           responseError: function(rejection) {
             if (rejection.status === 401) {
               if($location.path() != "/login"){
                   localStorage.clear();
                   window.location.reload();
               }  
             }
             return $q.reject(rejection);
           }
         }
     }])
     
     
     // .run(function($rootScope, $window, $state, $location, LoginService) {
     //   $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
     //       var loginStatus = localStorage.getItem("loginStatus");
     //       if (loginStatus == null) {
     //           if (next.url == "/login" || next.url == "/signup" || next.url == "/forgot-password") {
     //               // if route already going to #login, no redirect needed
     //           } else {
     //               // another route, we should redirect now  
     //               $window.location.href = '#/login';
     //               event.preventDefault();
     //           }
     //       } else {
     //           if (next.name == 'login') {
     //               event.preventDefault();
     //               if ($state.current.name.length == 0) {
     //                   $state.go('app.upload');
     //               } else {
     //                  $state.go($state.current, {}, {reload: true});
     //               }
     //           }
     //       }
     //   });
     // })
    
    .provider('myCSRF',[function(){
      var headerName = 'X-CSRFToken';
      var cookieName = 'csrftoken';
      var allowedMethods = ['GET'];

      this.setHeaderName = function(n) {
        headerName = n;
      }
      this.setCookieName = function(n) {
        cookieName = n;
      }
      this.setAllowedMethods = function(n) {
        allowedMethods = n;
      }
      this.$get = ['$cookies', function($cookies){
        return {
          'request': function(config) {
            if(allowedMethods.indexOf(config.method) === -1) {
              // do something on success
              config.headers[headerName] = $cookies[cookieName];
            }
            return config;
          }
        }
      }];
    }])

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