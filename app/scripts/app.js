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
    'leaflet-directive',
    'ngToast',
    'ui.select'
  ])
  .config(function ($routeProvider,$translateProvider,tmhDynamicLocaleProvider) {
//	  ROUTES CONF
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/search', {
        templateUrl: 'views/search.html',
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
      })
       .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/map',{
            templateUrl: 'views/map.html'
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
