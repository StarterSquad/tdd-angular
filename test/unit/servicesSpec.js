'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  var countWordsOf;
  beforeEach(function(){
    module('myApp.services');
    inject(function(count){
      countWordsOf = count;
    });
  });

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
