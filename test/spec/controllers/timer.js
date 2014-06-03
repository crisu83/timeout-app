'use strict';

describe('Controller: TimerCtrl', function () {

  // load the controller's module
  beforeEach(module('timeoutApp'));

  var TimerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimerCtrl = $controller('TimerCtrl', {
      $scope: scope
    });
  }));

});
