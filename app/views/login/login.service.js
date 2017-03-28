(function() {
  'use strict';

  angular.module('inspinia')
      .service('LoginService', ['$rootScope', '$q', '$http', 'BE', LoginService])

   function LoginService($rootScope, $q, $http, BE) {

        this.loginUser = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/registration',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
              data : data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }
   }

})();