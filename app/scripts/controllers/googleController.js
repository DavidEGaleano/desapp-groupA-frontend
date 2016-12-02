'use strict';
var todos = angular.module('salidasApp');

todos.controller('GoogleCtrl',function($scope,$http,$rootScope) {
	 var local = 'http://localhost:8080/desapp-groupA-backend/rest';
	 var heroku = 'https://salidasbackend.herokuapp.com/rest';
	  function onSignIn(googleUser) {
		    var profile = googleUser.getBasicProfile();
		    $rootScope.profile = googleUser.getBasicProfile();
		    $scope.email = profile.getEmail();
		    var id = profile.getId();
		    var name = profile.getGivenName();
		    var imageUrl = profile.getImageUrl();
		    var email = profile.getEmail();
		    var token = googleUser.getAuthResponse();
		    console.log('token: '+token.id_token);
			  $http.get(local + '/user/setUser/'+name+'/'+email+'/'+token.id_token)
			  .success(function(dat){
				  console.log("added");
			  }).error(function(err){
				 console.log(err);
			  });
			  

		   }
	  window.onSignIn = onSignIn;
	  }
		
);

