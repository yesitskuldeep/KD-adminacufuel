(function() {
  'use strict';

  angular.module('inspinia')
      .service('FBOAdmin', ['$rootScope', '$q', '$http', 'BE', FBOAdmin])

   function FBOAdmin($rootScope, $q, $http, BE) {

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

        this.featureControl = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/user/accountFeatureControl',
              headers : {'Content-Type': 'application/json'},
              data : data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }
   }

})();