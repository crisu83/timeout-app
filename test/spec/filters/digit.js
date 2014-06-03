'use strict';

describe('Filter: digit', function () {

  // load the filter's module
  beforeEach(module('timeoutApp'));

  // initialize a new instance of the filter before each test
  var digit;
  beforeEach(inject(function ($filter) {
    digit = $filter('digit');
  }));

  it('should return the input prefixed with "digit filter:"', function () {
    var text = 'angularjs';
    expect(digit(text)).toBe('digit filter: ' + text);
  });

});
