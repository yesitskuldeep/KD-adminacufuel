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

   }

})();