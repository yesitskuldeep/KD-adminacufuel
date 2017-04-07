(function() {
  'use strict';

  angular.module('acuefuel')
      .service('LoginService', ['$rootScope', '$q', '$http', 'BE', '$state', LoginService])

   function LoginService($rootScope, $q, $http, BE, $state) {

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
               url : BE.url+'/user/authenticate',
               headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (result){
                console.log(result)
                if(result.data.user.admin == true){
                  window.localStorage.setItem('loginId', result.data.id);
                  window.localStorage.setItem('loginData', JSON.stringify(result.data.userProfile));
                  $state.go('index.dashboard');
                }else{
                  localStorage.clear();
                  toastr.info("Unauthorized");
                }
                deferred.resolve(result.data);
            },function (result){
                deferred.resolve(result.data);
            });
            return deferred.promise;
        }

        this.setAuth = function(data) {
            localStorage.setItem('loginStatus', data);
        }

        this.logout = function(data) {

          var deferred = $q.defer();
          $http({
              method : 'POST',
              url : BE.url +'/logout',
              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
              data : data
          })
          .success(function(result) {
              deferred.resolve(result.data);
          })
          return deferred.promise;
        }
   }

})();