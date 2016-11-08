'use strict';

/**
 * @ngdoc overview
 * @name salidasApp
 * @description
 * # salidasApp
 *
 * Main module of the application.
 */
angular
  .module('salidasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
