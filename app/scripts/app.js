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
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'angular.filter',
    'leaflet-directive'
  ])
  .config(function ($routeProvider,$translateProvider,tmhDynamicLocaleProvider) {
//	  ROUTES CONF
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
      .when('/map',{
            templateUrl: 'views/map.html',
            controller: 'MapController'
        })
      .otherwise({
        redirectTo: '/'
      });
//    TRANSLATE CONF
    $translateProvider
 	.useStaticFilesLoader({
      prefix: '/i18n/',
      suffix: '.json'
    })
    .useSanitizeValueStrategy('sanitize')
    .preferredLanguage('es');
   tmhDynamicLocaleProvider.localeLocationPattern('/i18n/angular-locale_{{locale}}.js');
  });
