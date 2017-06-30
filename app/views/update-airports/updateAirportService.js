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
         .then(function (result){
              deferred.resolve(result);
          },function (result){
            console.log(result)
              deferred.resolve(result);
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
           .then(function (result){
              deferred.resolve(result);
          },function (result){
            console.log(result)
              deferred.resolve(result);
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
              url : BE.url +'/airport/upload/countries',
              headers : {'Content-Type': undefined},
              data : fd
          })
          .then(function (result){
              deferred.resolve(result);
          },function (result){
            console.log(result)
              deferred.resolve(result);
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
          .then(function (result){
              deferred.resolve(result);
          },function (result){
            console.log(result)
              deferred.resolve(result);
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
          .then(function (result){
              deferred.resolve(result);
          },function (result){
            console.log(result)
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.getUploadProgress = function(filetype) {

            var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/airport/export/records/'+filetype,
          })
          .then(function (result){
              deferred.resolve(result.data);
          },function (result){
              deferred.resolve(result.data);
          })
          return deferred.promise;
        }

        this.getAllUploadProgress = function(filetype) {

            var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/airport/export/records',
          })
          .then(function (result){
              deferred.resolve(result.data);
          },function (result){
              deferred.resolve(result.data);
          })
          return deferred.promise;
        }

        
        
   }

})();