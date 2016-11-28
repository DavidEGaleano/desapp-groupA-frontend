'use strict';

angular.module('salidasApp')
  .controller('LocaleCtrl', ['$translate', '$scope', 'tmhDynamicLocale', function ($translate, $scope, tmhDynamicLocale) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
      tmhDynamicLocale.set(langKey);
    };
  }]);