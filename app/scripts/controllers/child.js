'use strict';

angular.module('timeoutApp')
  .controller('ChildCtrl', function ($scope) {

    $scope.titleText = 'Children';
    $scope.titleButtonRight = {
      label: 'Add',
      url: '#',
      cssClass: 'btn-primary'
    };

    $scope.children = [
      {
        name: 'Andreas',
        age: 5,
        timeoutSeconds: 300,
        numTimeouts: 22,
        avatarUrl: 'images/boy-1.jpg'
      },
      {
        name: 'Samuel',
        age: 4,
        timeoutSeconds: 180,
        numTimeouts: 42,
        avatarUrl: 'images/boy-2.jpg'
      },
      {
        name: 'Erica',
        age: 3,
        timeoutSeconds: 30,
        numTimeouts: 10,
        avatarUrl: 'images/girl-1.jpg'
      }
    ];

  });
