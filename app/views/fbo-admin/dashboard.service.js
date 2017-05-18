(function() {
  'use strict';

  angular.module('acuefuel')
      .service('FBOAdmin', ['$rootScope', '$q', '$http', 'BE', FBOAdmin])

   function FBOAdmin($rootScope, $q, $http, BE) {

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

        this.checkUsernameEmail = function(email){
          var deferred = $q.defer();
          $http({
              method : 'GET',
              url : BE.url +'/account/user/checkUserNameAvail/'+email,
              headers : {'Content-Type': 'application/json'},
          })
          .then(function (result){
              deferred.resolve(result.status);
          },function (result){
              deferred.resolve(result.status);
          })
          return deferred.promise;
        }
   }

})();