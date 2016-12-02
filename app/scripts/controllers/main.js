'use strict';

/**
 * @ngdoc function
 * @name salidasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the salidasApp
 */
angular.module('salidasApp')
  .controller('MainCtrl', function ($scope) {
	  $scope.title = function() {
		   var title = 'default';
		   return {
		     title: function() { return title; },
		     setTitle: function(newTitle) { title = newTitle; }
		   };
  };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
