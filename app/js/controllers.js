'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('CounterControl', function($scope, count) {
      angular.extend($scope, {
        count: count
      });
    }).controller('ListControl', function ($scope) {
      angular.extend($scope, {
        texts: [
          "This is just a sample text, so we can see it render",
          "This is the second sample text that is different from the first"
        ]
      });
    });