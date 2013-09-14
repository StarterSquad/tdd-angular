'use strict';

var countWordsOf = function(string) {
  return string.match(/\w+/g).length;
};

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
  })
});