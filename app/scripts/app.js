'use strict';

angular.module('timeoutApp', ['ngRoute', 'timer'])
  .config(function($routeProvider) {

    $routeProvider
      .when('/timer', {
        controller: 'TimerCtrl',
        templateUrl: 'views/timer.html'
      })
      .when('/children', {
        controller: 'ChildCtrl',
        templateUrl: 'views/child.html'
      })
      .when('/stats', {
        controller: 'StatsCtrl',
        templateUrl: 'views/stats.html'
      })
      .otherwise({
        redirectTo: '/timer'
      });

  });