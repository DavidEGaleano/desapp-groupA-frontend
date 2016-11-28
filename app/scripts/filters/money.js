'use strict';

/**
 * @ngdoc filter
 * @name advApp.filter:toDollar
 * @function
 * @description
 * # toDollar
 * Filter in the advApp.
 */
angular.module('salidasApp')
  .filter('money', function ($translate) {
    return function (input) {
      var useDollar = $translate.use() === 'en';
      return useDollar ? (input / 15) : input;
    };
  });