(function() {
  'use strict';

  angular.module('inspinia')
      .service('FBOFlight', ['$rootScope', '$q', '$http', 'BE', FBOFlight])

   function FBOFlight($rootScope, $q, $http, BE) {

        this.registerUser = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/user/registration',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
              data : data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.addCardInformation = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/user/addPaymentMethods',
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