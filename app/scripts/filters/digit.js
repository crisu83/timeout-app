'use strict';

angular.module('timeoutApp')
  .filter('digit', function () {
    return function (input) {
      return input < 10 ? '0' + input : input;
    };
  });
