'use strict';

/* jasmine specs for controllers go here */

describe('CounterControl', function(){

  var scope, subject, countWordsOf;

  var spies = {
    count: function(string){}
  };

  beforeEach(function(){
    module('myApp.controllers');

    module(function($provide){
     $provide.value('count', spies.count)
    });

    spyOn(spies, 'count');

    inject(function($rootScope, $controller){
      scope = $rootScope.$new();

      subject = $controller('CounterControl', {$scope: scope});
      countWordsOf = scope.count;
    });
  });

  describe('word count', function (){
    it('should use the service for counting', function (){
      countWordsOf('foo bar');
      expect(spies.count).toHaveBeenCalledWith('foo bar');
    });
  });
});
