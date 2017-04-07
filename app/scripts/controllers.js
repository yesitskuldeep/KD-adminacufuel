/**
 * acuefuel - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $location, $state, LoginService) {

    $scope.userName = 'Dylan Goodwin';
    $scope.helloText = 'Welcome in SeedProject';
    $scope.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    
    $scope.logout = function(){
    	console.log("Called")
    	LoginService.logout();
    	$state.go('login')
    }
};


angular
    .module('acuefuel')
    .controller('MainCtrl', MainCtrl)