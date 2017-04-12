(function() {
  'use strict';

  angular.module('acuefuel')
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
          }).error(function(error){
            deferred.reject(error);
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

        this.getAircraftMake = function(){
          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/fuelerlinx/acufuel/getAircraftMake',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getAircraftSize = function(){
          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/fuelerlinx/acufuel/getAircraftSize',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getModal = function(id){
          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/fuelerlinx/acufuel/getAircraftModel/' + id,
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.addAircraft = function(data){
          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/user/addAircraft',
              headers : {'Content-Type': 'application/json'},
              data: data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }
   }

})();