'use strict';

angular.module('timeoutApp')
  .directive('activate', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var activeClass = attrs.active || 'active';
        var path = attrs.href;
        scope.location = $location;
        scope.$watch('location.path()', function(newPath) {
          if (path.indexOf(newPath) !== -1) {
            element.addClass(activeClass);
          } else {
            element.removeClass(activeClass);
          }
        });
      }
    };
  });
