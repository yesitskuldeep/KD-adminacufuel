/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('login', {
            //abstract: true,
            url: "/login",
            templateUrl: "views/login/login.html",
            controller: 'LoginController'
        })

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "views/fbo-admin/dashboard.html",
            controller: 'DashboardController'
        })
        .state('index.flight', {
            url: "/flight",
            templateUrl: "views/fbo-flight/flight.html",
            controller: 'FlightDeptController'
        })
        .state('index.updateAirports', {
            url: "/updateAirports",
            templateUrl: "views/update-airports/update-airports.html",
            controller: 'updateAirportController'
        })
        .state('index.minor', {
            url: "/minor",
            templateUrl: "views/minor.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.getAllFBO', {
            url: "/getAllFBO",
            templateUrl: "views/getAllFBO/getAllFBO.html",
            controller: 'getAllFBOController'
        })
        .state('index.updateFBO', {
            url: "/updateFBO/:id",
            templateUrl: "views/updateAllFBO/updateAllFBO.html",
            controller: 'updateAllFBOController'
        })
        .state('index.fboClients', {
            url: "/fboClients",
            templateUrl: "views/fbo-Clients/fboClients.html",
            controller: 'fboClientsController'
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });