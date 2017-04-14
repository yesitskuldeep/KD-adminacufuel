(function() {
  'use strict';

  angular.module('acuefuel')
      .service('UpdateAllFBODept', ['$rootScope', '$q', '$http', 'BE', UpdateAllFBODept])

   function UpdateAllFBODept($rootScope, $q, $http, BE) {

        this.getALlFBOData = function(id) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/'+id,
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getNotes = function(id) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/'+id + '/notes',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getAircrafts = function(id) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/'+id + '/airCrafts',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getPaymentMethod = function(id) {

          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/'+id + '/paymentMethods',
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.updatePaymentMethod = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/account/user/updatePaymentMethods',
              headers : {'Content-Type': 'application/json'},
              data: data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.updateAircraft = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'PUT',
              url : BE.url +'/account/user/updateAircraft',
              headers : {'Content-Type': 'application/json'},
              data: data
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error) {
              deferred.reject(error);
          })
          return deferred.promise;
        }

        this.removeAircraft = function(id) {

          var deferred = $q.defer();
          $http({
              method : 'DELETE',
              url : BE.url +'/account/user/airCraft/'+id,
              headers : {'Content-Type': 'application/json'},
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

   }

})();