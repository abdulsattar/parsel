'use strict';

angular.module('parselApp')
  .service('Activity', function Activity(FirebaseRef) {
    this.activities = FirebaseRef.activities();
    this.add = function(message) {
      this.activities.$add({message: message});
    };
  });
