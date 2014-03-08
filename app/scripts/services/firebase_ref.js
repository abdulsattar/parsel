/*global Firebase:false*/
'use strict';

angular.module('parselApp')
  .service('FirebaseRef', function FirebaseRef($firebase) {
    var URL = 'https://parsel.firebaseio.com';
    var activityRef = new Firebase(URL + '/activities');
    this.activities = function() { return $firebase(activityRef); };
  });
