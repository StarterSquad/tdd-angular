'use strict';

/* jasmine specs for controllers go here */

describe('CounterControl', function(){

  var scope, subject, countWordsOf;

  beforeEach(function(){
    module('myApp.controllers');
    module('myApp.services');

    inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      subject = $controller('CounterControl', {$scope: scope});
      countWordsOf = scope.count;
    });
  });

  //This is duplicated in the servicesSpec. Next exercise we'll take care of that.
  describe('word count', function (){

    it('should count words in "foo bar"', function (){
      expect(countWordsOf('foo bar')).toBe(2);
    });

    it('should count words in multiline string', function(){
      expect(countWordsOf('foo bar\nbaz')).toBe(3);
    });

    it('should not count whitespace as words', function(){
      expect(countWordsOf('foo     bar')).toBe(2);
    });

    it('should not count interpunction as words', function(){
      expect(countWordsOf('foo - bar !')).toBe(2);
    });

    it('should deal with empty input', function (){
      expect(countWordsOf(undefined)).toBe(0);
    });
  });
});
