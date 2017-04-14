/**
 * acuefuel - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $location, $state, $rootScope, LoginService) {

    $scope.userName = 'Dylan Goodwin';
    $scope.helloText = 'Welcome in SeedProject';
    $scope.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    
    LoginService.getActiveUser().then(function(result) {
        $scope.pendingUser = result;
    })
    $scope.logout = function(){
    	console.log("Called")
    	LoginService.logout();
    	$state.go('login')
    }
    console.log($location)
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {
        console.log(next)
        if(next.name == "index.fboAdmin" || next.name == "index.dashboard" || next.name == "index.updateFBO"){
            $scope.headingName = 'FBO Admin Conductor';
        }else if(next.name == "index.flightDept" || next.name == "index.flight" || next.name == "index.updateFBODept"){
            $scope.headingName = 'Flight Department Admin Conductor';
        }else{
            $scope.headingName = '';
        }
    })
};


angular
    .module('acuefuel')
    .controller('MainCtrl', MainCtrl)