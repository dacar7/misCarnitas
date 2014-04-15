'use strict';

angular.module('ejercicio2App')
  .controller('DirectorioCtrl', ['$scope', '$http', 'Marca', function ($scope, $http, Marca) {
 
   $scope.marcas = Marca.query();
 
  }]);
