(function() {
  'use strict';

  angular.module('inspinia')
      .service('LoginService', ['$rootScope', '$q', '$http', 'BE', LoginService])

   function LoginService($rootScope, $q, $http, BE) {

        this.loginUser = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/login',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
              data : data
          })
          .success(function(result) {
              deferred.resolve(result.data);
          })
          return deferred.promise;
        }

        this.authenticate = function() {
            var deferred = $q.defer();
            $http({
               method : 'GET',
               url : BE.url+'user/authenticate',
               headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (result){
                console.log(result)
                localStorage.setItem('userProfileId', result.data.userProfile.id);
                localStorage.setItem('email', result.data.userProfile.email);
                deferred.resolve(result.data);
            },function (result){
                deferred.resolve(result.data);
            });
            return deferred.promise;
        }

        this.setAuth = function(data) {
            localStorage.setItem('loginStatus', data);
        }
   }

})();