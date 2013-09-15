'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('CounterControl', function($scope, count) {
      angular.extend($scope, {
        count: count
      });
  });