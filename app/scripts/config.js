/**
 * Acuefuel - Responsive Admin Theme
 *
 * Acuefuel theme use AngularUI Router to manage routing and views
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
        .state('index.updateFBO', {
            url: "/updateFBO/:id",
            templateUrl: "views/updateAllFBO/updateAllFBO.html",
            controller: 'updateAllFBOController'
        })
        .state('index.updateFBODept', {
            url: "/updateFBODept/:id",
            templateUrl: "views/updateFBODept/updateFBODept.html",
            controller: 'updateFBODeptController'
        })
        // .state('index.fboClients', {
        //     url: "/fboClients",
        //     templateUrl: "views/fbo-Clients/fboClients.html",
        //     controller: 'fboClientsController'
        // })
        .state('index.fboAdmin', {
            url: "/fboAdmin",
            templateUrl: "views/fbo-Clients/fboClients.html",
            controller: 'fboClientsController'
        })
        .state('index.flightDept', {
            url: "/flightDept",
            templateUrl: "views/flightDept/flightDept.html",
            controller: 'flightDeptController'
        })
}
angular
    .module('acuefuel')
    .config(config)
    .run(['$rootScope', '$state', 'UpdateAirportService', function($rootScope, $state, UpdateAirportService) {
        $rootScope.$state = $state;
        $rootScope.record = {}
        

        // var progress1 = "";
        // $(document).ready(function() {
        //     progress1 = setInterval(function(){ 
        //         progressBar();
        //     }, 3000);

        //     function progressBar(){
        //         setInterval (function(){
        //             $('.progress .progress-bar').progressbar({
        //                 display_text: 'none'
        //             });
        //         },1)   
        //     }
        // });

        getAllUploadProgress();
        function getAllUploadProgress() {
		UpdateAirportService.getAllUploadProgress().then(function(result) {
			console.log("all results ",result)
			for(var i =0 ; i<result.length; i++){
				if(result[i].filetype == 'Airports'){
					$rootScope.record.AirportCount = result[i].progress
					$rootScope.record.AirportStatus = result[i].status
				}
				else if(result[i].filetype == 'Countries'){
					$rootScope.record.CountriesCount = result[i].progress
					$rootScope.record.CountriesStatus = result[i].status
				}
				else if(result[i].filetype == 'SubdivisionStates'){
					$rootScope.record.SubdivisionStatesCount = result[i].progress
					$rootScope.record.SubdivisionStatesStatus = result[i].status
				}
				else if(result[i].filetype == 'FBOHandlerDetail'){
					$rootScope.record.FBOHandlerDetailCount = result[i].progress
					$rootScope.record.FBOHandlerDetailStatus = result[i].status
				}
				else if(result[i].filetype == 'SupplierDetail'){
					$rootScope.record.SupplierDetailCount = result[i].progress
					$rootScope.record.SupplierDetailStatus = result[i].status

				}
			}
			
		})

	}	
	


        var filetypeA = localStorage.getItem('filetypeA')
        var filetypeC = localStorage.getItem('filetypeC')
        var filetypeSS = localStorage.getItem('filetypeSS')
        var filetypeFBO = localStorage.getItem('filetypeFBO')
        var filetypeSD = localStorage.getItem('filetypeSD')
        
        if(filetypeA != null)
        var uploadStatusA =filetypeA.split(",")[1];
        if(filetypeC != null)
        var uploadStatusC =filetypeC.split(",")[1];
        if(filetypeSS != null)
        var uploadStatusSS =filetypeSS.split(",")[1];
        if(filetypeFBO != null)
        var uploadStatusFBO =filetypeFBO.split(",")[1];
        if(filetypeSD != null)
        var uploadStatusSD =filetypeSD.split(",")[1];

        

        if(uploadStatusA != 'Completed' || uploadStatusC != 'Completed' || uploadStatusSS != 'Completed' || uploadStatusFBO != 'Completed' || uploadStatusSD != 'Completed'){
            var uploadProgress = setInterval(function(){ 
                uploadData();
            }, 500);
        
            function uploadData() {
                if(filetypeA != null &&  filetypeA.split(",")[0] == 'Airports'){
                UpdateAirportService.getUploadProgress(filetypeA.split(",")[0]).then(function(result) {
                        if(result != null){
                          $rootScope.record.AirportCount = result.progress
                          $rootScope.record.AirportStatus = result.status
                                if($rootScope.record.AirportStatus == 'Completed' || $rootScope.record.AirportStatus == 'Error'){
                                $rootScope.showAirports = true;
                                localStorage.removeItem('filetypeA');
                                localStorage.removeItem('airportLoader');
                            }
                        }
                    })
                }
                if(filetypeC != null && filetypeC.split(",")[0] == 'Countries'){
                UpdateAirportService.getUploadProgress(filetypeC.split(",")[0]).then(function(result) {
                        if(result != null){
                          $rootScope.record.CountriesCount = result.progress
                          $rootScope.record.CountriesStatus = result.status
                                if($rootScope.record.CountriesStatus == 'Completed' || $rootScope.record.CountriesStatus == 'Error'){
                                $rootScope.showCountries = true;
                                localStorage.removeItem('filetypeC');
                                localStorage.removeItem('countryLoader');
                                 }
                                 
                             }
                    })
                }
                if(filetypeSS != null &&  filetypeSS.split(",")[0] == 'SubdivisionStates'){
                UpdateAirportService.getUploadProgress(filetypeSS.split(",")[0]).then(function(result) {
                        if(result != null){
                          $rootScope.record.SubdivisionStatesCount = result.progress
	 				      $rootScope.record.SubdivisionStatesStatus = result.status
                                if($rootScope.record.SubdivisionStatesStatus == 'Completed' || $rootScope.record.SubdivisionStatesStatus == 'Error'){
                                $rootScope.subDivState = true;
                                localStorage.removeItem('filetypeSS');
                                localStorage.removeItem('subDivStateLoader');
                            }
                        }
                    })
                }
                if(filetypeFBO != null &&  filetypeFBO.split(",")[0] == 'FBOHandlerDetail'){
                UpdateAirportService.getUploadProgress(filetypeFBO.split(",")[0] ).then(function(result) {
                        if(result != null){
                           $rootScope.record.FBOHandlerDetailCount = result.progress
	  			           $rootScope.record.FBOHandlerDetailStatus = result.status
                                if($rootScope.record.FBOHandlerDetailStatus == 'Completed' || $rootScope.record.FBOHandlerDetailStatus == 'Error'){
                                $rootScope.fboHandlerDetail = true;
                                localStorage.removeItem('filetypeFBO');
                                localStorage.removeItem('fboHandleLoader');
                            }
                        }
                    })
                }
                if(filetypeSD != null &&  filetypeSD.split(",")[0] == 'SupplierDetail'){
                UpdateAirportService.getUploadProgress(filetypeSD.split(",")[0]).then(function(result) {
                        if(result != null){
                          $rootScope.record.SupplierDetailCount = result.progress
					      $rootScope.record.SupplierDetailStatus = result.status
                                if($rootScope.record.SupplierDetailStatus == 'Completed' || $rootScope.record.SupplierDetailStatus == 'Error'){
                                $rootScope.suppDetail = true;
                                localStorage.removeItem('filetypeSD');
                                localStorage.removeItem('suppDetailLoader');
                            }
                        }
                    })
                }
            }
        }else if(uploadStatusA == 'Completed' || uploadStatusC == 'Completed' || uploadStatusSS == 'Completed' || uploadStatusFBO == 'Completed' || uploadStatusSD == 'Completed'){
            clearInterval(uploadProgress);
        }
        
    }]);