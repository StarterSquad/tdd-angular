'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('CounterControl', function($scope) {
      angular.extend($scope, {
        count: function(string) {
          return string ? string.match(/\w+/g).length : 0;
        }
      });
  });