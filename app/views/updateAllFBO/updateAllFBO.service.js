(function() {
  'use strict';

  angular.module('acuefuel')
      .service('UpdateAllFBO', ['$rootScope', '$q', '$http', 'BE', UpdateAllFBO])

   function UpdateAllFBO($rootScope, $q, $http, BE) {

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

        this.updateUser = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'PUT',
              url : BE.url +'/account/updateProfile',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
              data: data
          })
          .success(function(result) {
              deferred.resolve(result);
          })
          return deferred.promise;
        }

        this.updatefeatureControl = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'PUT',
              url : BE.url +'/account/user/updateAccountFeatureControl',
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