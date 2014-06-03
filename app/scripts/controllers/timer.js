'use strict';

angular.module('timeoutApp')
  .controller('TimerCtrl', function ($scope, $timeout, $compile, $filter) {

    // dummy model
    $scope.child = {
      name: 'Erica',
      timeoutSeconds: 30
    };

    var minutes = Math.floor($scope.child.timeoutSeconds / 60),
      seconds = $scope.child.timeoutSeconds % 60;

    var $container = $('#timerContainer');

    var getTimerText = function() {
      return $filter('digit')(minutes) + ':' + $filter('digit')(seconds);
    };

    var getTimerMillis = function() {
      return (minutes * 60 + seconds) * 1000;
    };

    var parseTimerSeconds = function(text) {
      var parts = text.split(':');
      return (parseInt(parts[0]) * 60) + parseInt(parts[1]);
    };

    var startTimer = function () {
      var endTime = Date.now() + getTimerMillis(),
        $timer = angular.element('<timer interval="1000" end-time="' + endTime + '">{{(minutes|digit) || "00"}}:{{(seconds|digit) || "00"}}</timer>'),
        timerScope = $scope.$new();

      $container.html($timer);
      $compile($timer)(timerScope);

      timerScope.$on('timer-stopped', function () {
        stopTimer();
        $scope.$apply();
      });

      $scope.running = true;
    };

    var stopTimer = function () {
      var $timer = $container.find('timer');

      $timer.stop();
      $container.html('');

      $scope.running = false;
    };

    $scope.titleText = 'Timer';
    $scope.titleButtonRight = {
      label: 'Edit',
      url: '#',
      cssClass: 'btn-primary'
    };
    $scope.timerText = getTimerText();
    $scope.running = false;
    $scope.startTimer = startTimer;
    $scope.stopTimer = stopTimer;

  });
