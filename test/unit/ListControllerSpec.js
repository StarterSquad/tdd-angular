describe('ListControl', function(){
  var scope, subject;

  beforeEach(function(){
    module('myApp.controllers');

    inject(function($rootScope, $controller){
      scope = $rootScope.$new();

      subject = $controller('ListControl', {$scope: scope});
    });
  });

  describe('initialization', function(){
    it('should hold a list of defaults', function(){
      expect(scope.texts.length).toBeGreaterThan(1);
    });
  });
});
