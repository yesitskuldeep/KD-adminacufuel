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

   }

})();