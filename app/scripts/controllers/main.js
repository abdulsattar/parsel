'use strict';

angular.module('parselApp')
  .controller('MainCtrl', function ($scope, Activity) {
    $scope.activities = Activity.activities;

    $scope.newMessage = '';

    $scope.sendMessage = function(e) {
      if(e.keyCode !== 13) { return; }

      Activity.add($scope.newMessage);
      $scope.newMessage = '';
    };
  });
