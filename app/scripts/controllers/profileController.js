var app = angular.module('salidasApp');

app.controller('ProfileController',function($scope,$http,$rootScope,$location,ngToast) {
	 
	$scope.image = $rootScope.imageurl;
	$scope.email = $rootScope.mail;
	$scope.username = $rootScope.userName;
	$scope.profileId = $rootScope.profileId;
	$scope.music = $rootScope.typeOfMusic;
	$scope.food = $rootScope.typeOfFood;
	$scope.film = $rootScope.typeOfFilm;
	$scope.limitamount =  $rootScope.limitAmount;
	$scope.limitpeople = $rootScope.limitPeople;
	$scope.userdata = {};
	$scope.foodlist = [	"PASTA",
	                	"FAST_FOOD",
	                	"PIZZA",
	                	"SUSHI",
	                	"GRILL"];
	$scope.musiclist = ["ELECTRONIC",
	                    "POP",
	                    "CLASSIC",
	                    "ROCK",
	                    "REGGAETON"];
	$scope.filmlist = [	"HORROR",
	                	"ADVENTURE",
	                	"FANTASY",
	                	"COMEDY",
	                	"ACTION"];

	$scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
	    if ($scope.mail == null &&  newValue != '/home'){
	    		$location.path("/home");
	    		newValue = '/login';
	    		$scope.getUser();
    			ngToast.create({
  				  className: 'info',
  				  timeout:500,
  				  dismissOnClick: true,
  				  content: '<aclass="" translate="options"> Please, Log In.</a>'
  				});
	    } 
	});

	  var local = 'http://localhost:8080/desapp-groupA-backend/rest';
	  var heroku = 'https://salidasbackend.herokuapp.com/rest';
	  
	  $scope.getUser = function(){
		    $scope.limitamount =  $rootScope.limitAmount;
			$scope.image = $rootScope.imageurl;
			$scope.email = $rootScope.mail;
			$scope.username = $rootScope.userName;
			$scope.profileId = $rootScope.profileId;
			$scope.music = $rootScope.typeOfMusic;
			$scope.food = $rootScope.typeOfFood;
			$scope.film = $rootScope.typeOfFilm;
			$scope.limitpeople = $rootScope.limitPeople;
	  }
	  
	  $scope.sendUserData =function(){		 
		  
		  $http.post( local + '/user/updateUser/'+$rootScope.iduser+'/'+$scope.username+'' )
		  .success(function(data){
			  		$rootScope.userName = $scope.username;
			  		$rootScope.email = $scope.mail;;
			  		 $http.post( local + '/profile/update/'+$scope.profileId+'/'+$scope.limitamount+'/'+$scope.music+'/'+$scope.food+'/'+ $scope.film +'/'+ $scope.limitpeople  )
					  .success(function(data){
						  		$rootScope.limitAmount = $scope.limitamount;
								$rootScope.typeOfMusic = $scope.music;
								$rootScope.typeOfFood = $scope.food;
								$rootScope.typeOfFilm = $scope.film;
								$rootScope.limitPeople = $scope.limitpeople;						  		
				    			ngToast.create({
				    				  className: 'success',
				    				  content: '<aclass="" translate="options"> Profile updated!</a>'
				    				});
					  })
					  .error(function(error){
			    			ngToast.create({
			    				  className: 'danger',
			    				  content: '<aclass="" translate="options"> Can´t update profile!</a>'
			    				});
						  console.log(error);
					  });	
		  })
		  .error(function(error){
			  console.log(error);
		  });	
		  
	  }
	  
	  $scope.save = function(){
		  
	  }
});