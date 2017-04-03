(function() {
  'use strict';

  angular.module('inspinia')
      .service('FBOClient', ['$rootScope', '$q', '$http', 'BE', FBOClient])

   function FBOClient($rootScope, $q, $http, BE) {

        this.getALlFBOList = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/getAllFBOs',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

         this.getAllFlightDeptList = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/getAllFlightDept',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

   }

})();