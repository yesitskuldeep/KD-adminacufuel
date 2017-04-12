(function() {
  'use strict';

  angular.module('acuefuel')
      .service('UpdateAirportService', ['$rootScope', '$q', '$http', 'BE', UpdateAirportService])

   function UpdateAirportService($rootScope, $q, $http, BE) {

        this.updateAirportData = function(data) {

          var fd = new FormData();

          angular.forEach(data, function(value, key) {
            fd.append(key, value);
          })

          var deferred = $q.defer();
          $http({
              method : 'POST',
              transformRequest: angular.identity,                    
              url : BE.url +'/airport/upload/airports',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error){
            deferred.reject(error);
          })
          return deferred.promise;
        }

        this.updateSupplierDetail = function(data) {

          var fd = new FormData();

          angular.forEach(data, function(value, key) {
            fd.append(key, value);
          })

          var deferred = $q.defer();
          $http({
              method : 'POST',
              transformRequest: angular.identity,                    
              url : BE.url +'/airport/upload/supplierDetail',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error){
            deferred.reject(error);
          })
          return deferred.promise;
        }

        this.updateCountries = function(data) {

          var fd = new FormData();

          angular.forEach(data, function(value, key) {
            fd.append(key, value);
          })

          var deferred = $q.defer();
          $http({
              method : 'POST',
              transformRequest: angular.identity,                    
              url : BE.url +'/airport/upload/updateCountries',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error){
            deferred.reject(error);
          })
          return deferred.promise;
        }

        this.updateSubDivisionState = function(data) {

          var fd = new FormData();

          angular.forEach(data, function(value, key) {
            fd.append(key, value);
          })

          var deferred = $q.defer();
          $http({
              method : 'POST',
              transformRequest: angular.identity,                    
              url : BE.url +'/airport/upload/subDivisionState',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error){
            deferred.reject(error);
          })
          return deferred.promise;
        }

        this.updateFBOHandler = function(data) {

          var fd = new FormData();

          angular.forEach(data, function(value, key) {
            fd.append(key, value);
          })

          var deferred = $q.defer();
          $http({
              method : 'POST',
              transformRequest: angular.identity,                    
              url : BE.url +'/airport/upload/FBOHandler',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .success(function(result) {
              deferred.resolve(result);
          }).error(function(error){
            deferred.reject(error);
          })
          return deferred.promise;
        }
   }

})();