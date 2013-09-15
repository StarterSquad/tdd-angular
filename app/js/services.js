'use strict';

angular.module('myApp.services', []).
  value('count', function(string) {
      return string ? string.match(/\w+/g).length : 0;
    });
