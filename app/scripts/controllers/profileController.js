var app = angular.module('salidasApp');

app.controller('ProfileController',function($scope,$http,$rootScope,$location) {
	$scope.image = $rootScope.imageurl;
	$scope.email = $rootScope.mail;
	$scope.username = $scope.userName;
	$scope.profileId = $rootScope.profileId;
	$scope.music = $rootScope.typeOfMusic;
	$scope.food = $rootScope.typeOfFood;
	$scope.film = $rootScope.typeOfFilm;
	
	$scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
	    if ($scope.mail == null &&  newValue != '/home'){
	    		$location.path("/home");
	    		newValue = '/login';
	    		$scope.getUser();
	    } 
	});

	  var local = 'http://localhost:8080/desapp-groupA-backend/rest';
	  var heroku = 'https://salidasbackend.herokuapp.com/rest';
	  $scope.getUser = function(){
			$scope.image = $rootScope.imageurl;
			$scope.email = $rootScope.mail;
			$scope.username = $scope.userName;
			$scope.profileId = $rootScope.profileId;
			$scope.music = $rootScope.typeOfMusic;
			$scope.food = $rootScope.typeOfFood;
			$scope.film = $rootScope.typeOfFilm;
	  }
	  
	  $scope.save = function(){
		  
	  }
});