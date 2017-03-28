(function() {
  'use strict';

  angular.module('inspinia')
      .service('Registration', ['$rootScope', '$q', '$http', 'BE', Registration])

   function Registration($rootScope, $q, $http, BE) {

        this.registerUser = function(data) {

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