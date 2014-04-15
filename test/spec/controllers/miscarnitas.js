'use strict';

describe('Controller: MiscarnitasCtrl', function () {

  // load the controller's module
  beforeEach(module('ejercicio2App'));

  var MiscarnitasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiscarnitasCtrl = $controller('MiscarnitasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});