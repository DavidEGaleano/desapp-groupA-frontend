'use strict';
var todos = angular.module('salidasApp');

todos.controller('GoogleCtrl',function($scope,$http,$rootScope,$location,ngToast) {
	 var local = 'http://localhost:8080/desapp-groupA-backend/rest';
	 var heroku = 'https://salidasbackend.herokuapp.com/rest';
	 $rootScope.haslogged = false;
	 $scope.haslogged = false;
	 
	 function onSignIn(googleUser) {
		    var profile = googleUser.getBasicProfile();
		    $rootScope.profile = googleUser.getBasicProfile();
		    $scope.email = profile.getEmail();
		    var name = profile.getGivenName();
		    var email = profile.getEmail();
		    var token = googleUser.getAuthResponse();
			 $rootScope.haslogged = true;
			 $scope.haslogged = true;
		    console.log('token: '+token.id_token);
			  $http.get(local + '/user/setUser/'+name+'/'+email+'/'+token.id_token)
			  .success(function(dat){				  
				  $rootScope.iduser = dat.ID;
				  $rootScope.imageurl = profile.getImageUrl();
				  console.log("added");
				  console.log("ID user: " +$rootScope.iduser);
				  $http.get(local + '/user/getUser/'+$rootScope.iduser)
				  .success(function(dat){			
					  $rootScope.iduser = dat.id;
					  $rootScope.friends = dat.friends;
					  $rootScope.mail = dat.mail;					  
					  $rootScope.userName = dat.userName;
					  $rootScope.profileId = dat.profileId;
					  console.log(dat);
					  $http.get(local + '/profile/getProfile/'+dat.profileId)
					  	.success(function(data){
					  	  $rootScope.limitAmount = data.limitAmount;
					  	  $rootScope.typeOfFilm = data.typeOfFilm;
					  	  $rootScope.typeOfFood = data.typeOfFood;
					  	  $rootScope.typeOfMusic = data.typeOfMusic;
					  	  $rootScope.limitPeople = data.limitPeople;
						  console.log(data);
			    			ngToast.create({
			    				  className: 'info',
			    				  timeout:1000,
			    				  dismissOnClick: true,
			    				  content: '<aclass="" translate="options"> Has been logged as '+$rootScope.userName+'</a>'
			    				});
					  	}).error(function(err){
					  		console.log(err);
					  	});
				  }).error(function(err){
					 console.log(err);
				  });
			  }).error(function(err){
				 console.log(err);
			  });
			  

		   }
	  
	  
	  function signOut(){
		    var auth2 = gapi.auth2.getAuthInstance();
			$rootScope.haslogged = false;
			$scope.haslogged = false;
		    auth2.signOut().then(function () {
		    	$rootScope.haslogged = false;
		    	$scope.haslogged = false;
		      console.log($rootScope.haslogged );
		      location.reload();
		    });
		  }

	  window.onSignIn = onSignIn;
	  window.signOut = signOut;
	  }
		
);

