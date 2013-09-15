'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [ 'myApp.services', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/counter.html', controller: 'CounterControl'});
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListControl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
