'use strict';

angular.module('acuefuel')

.controller('updateAirportController', function ($scope, UpdateAirportService) {
  		$scope.dropName = true;
  		$scope.supplierName = true;
      	$scope.countryName = true;
      	$scope.subDivisionName = true;
      	$scope.fboHandlerName = true;
      	$scope.showAirports = true;
      	$scope.showCountries = true;
      	$scope.fboHandlerDetail = true;
      	$scope.subDivState = true;
      	$scope.suppDetail = true;

  		// Showing Date
      	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		if(dd < 10){  
			dd='0'+dd;  
		}   
		if(mm < 10){  
			mm='0'+mm;  
		} 
		$scope.newDate = dd + '/' + mm + '/' + yyyy;

		//Import Airport Data
		$scope.data = {};
		$scope.importAirportData = function(fileName) {
			$scope.showAirports = false;
			console.log(fileName)
			if(fileName.name != undefined){
				$scope.dropName = false;
				$scope.selectedFile = fileName;
				$scope.data.airportFile = $scope.selectedFile;
			}else if(fileName instanceof Array){
				$scope.dropName = false;
				$scope.selectedFile = fileName[0];
				$scope.data.airportFile = $scope.selectedFile;
			}
			var fileCheck = $scope.data.airportFile.name.split('.')[1];
			console.log(fileCheck)
			if(fileCheck == 'csv'){
				UpdateAirportService.updateAirportData($scope.data).then(function(result) {
					$scope.showAirports = true;
			  		console.log(result)
			  	 	toastr.success('Copied', {
		              closeButton: true
		            })
				})
			}else {
				$scope.showAirports = true;
				$scope.dropName = true;
				toastr.error('Please select only csv file', {
	              closeButton: true
	            })
			}
			
		}

		//Import Supplier Detail Data
		$scope.supplierData = {};
		$scope.importSuppluerDetail = function(fileName){
			$scope.suppDetail = false;
			console.log(fileName)
			if(fileName.name != undefined){
				$scope.supplierName = false;
				$scope.selectedSuplier = fileName;
				$scope.supplierData.supplierDetailFile = $scope.selectedSuplier;
			}else if(fileName instanceof Array){
				$scope.supplierName = false;
				$scope.selectedSuplier = fileName[0];
				$scope.supplierData.supplierDetailFile = $scope.selectedSuplier;
			}
			var fileCheck = $scope.supplierData.supplierDetailFile.name.split('.')[1];
			console.log(fileCheck)
			if(fileCheck == 'csv'){
				UpdateAirportService.updateSupplierDetail($scope.supplierData).then(function(result) {
			  	console.log(result)
			  		$scope.suppDetail = true;
			  	 	toastr.success('File Upload Successfully', {
		              closeButton: true
		            })
				})
			}else {
				$scope.suppDetail = true;
				$scope.supplierName = true;
				toastr.error('Please select only csv file', {
	              closeButton: true
	            })
			}
		}

		//Import Countries Data
		$scope.countryData = {};
		$scope.importCountryData = function(fileName){
			$scope.showCountries = false;
			console.log(fileName)
			if(fileName.name != undefined){
				$scope.countryName = false;
				$scope.selectedCountry = fileName;
				$scope.countryData.countrieFile = $scope.selectedCountry;
			}else if(fileName instanceof Array){
				$scope.countryName = false;
				$scope.selectedCountry = fileName[0];
				$scope.countryData.countrieFile = $scope.selectedCountry;
			}
			var fileCheck = $scope.countryData.countrieFile.name.split('.')[1];
			console.log(fileCheck)
			if(fileCheck == 'csv'){
				UpdateAirportService.updateCountries($scope.countryData).then(function(result) {
			  	console.log(result)
			  		$scope.showCountries = true;
			  	 	toastr.success('File Upload Successfully', {
		              closeButton: true
		            })
				})
			}else {
				$scope.showCountries = true;
				$scope.countryName = true;
				toastr.error('Please select only csv file', {
	              closeButton: true
	            })
			}
		}

		//Import Sub Divison State Data
		$scope.subDivisionData = {};
		$scope.importsubDivisionData = function(fileName){
			$scope.subDivState = false;
			console.log(fileName)
			if(fileName.name != undefined){
				$scope.subDivisionName = false;
				$scope.selectedState = fileName;
				$scope.subDivisionData.subDivisionStateFile = $scope.selectedState;
			}else if(fileName instanceof Array){
				$scope.subDivisionName = false;
				$scope.selectedState = fileName[0];
				$scope.subDivisionData.subDivisionStateFile = $scope.selectedState;
			}
			var fileCheck = $scope.subDivisionData.subDivisionStateFile.name.split('.')[1];
			console.log(fileCheck)
			if(fileCheck == 'csv'){
				UpdateAirportService.updateSubDivisionState($scope.subDivisionData).then(function(result) {
			  	console.log(result)
			  		$scope.subDivState = true;
			  	 	toastr.success('File Upload Successfully', {
		              closeButton: true
		            })
				})
			}else {
				$scope.subDivState = true;
				$scope.subDivisionName = true;
				toastr.error('Please select only csv file', {
	              closeButton: true
	            })
			}
		}

		//Import FBO Handler Data
		$scope.fboHandlerData = {};
		$scope.importFboHandler = function(fileName){
			$scope.fboHandlerDetail = false;
			console.log(fileName)
			if(fileName.name != undefined){
				$scope.fboHandlerName = false;
				$scope.selectedFBO = fileName;
				$scope.fboHandlerData.FBOHandlerFile = $scope.selectedFBO;
			}else if(fileName instanceof Array){
				$scope.fboHandlerName = false;
				$scope.selectedFBO = fileName[0];
				$scope.fboHandlerData.FBOHandlerFile = $scope.selectedFBO;
			}
			var fileCheck = $scope.fboHandlerData.FBOHandlerFile.name.split('.')[1];
			console.log(fileCheck)
			if(fileCheck == 'csv'){
				UpdateAirportService.updateFBOHandler($scope.fboHandlerData).then(function(result) {
			  	console.log(result)
			  		$scope.fboHandlerDetail = true;
			  	 	toastr.success('File Upload Successfully', {
		              closeButton: true
		            })
				})
			}else {
				$scope.fboHandlerDetail = true;
				$scope.fboHandlerName = true;
				toastr.error('Please select only csv file', {
	              closeButton: true
	            })
			}
		}

})