'use strict';

describe('Controller: DirectorioCtrl', function () {

  // load the controller's module
  beforeEach(module('ejercicio2App'));

  var DirectorioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectorioCtrl = $controller('DirectorioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
