'use strict';

angular.module('ejercicio2App')
  .controller('MiscarnitasCtrl',  ['$scope', 'TiposCarnes', function ($scope, TiposCarnes) {
    
      $scope.inventario = [];
      $scope.tipos = TiposCarnes.query();

      $scope.guardarCarnita = function(){
        
        $scope.inventario.push({tipo:$scope.selected, cantidad:$scope.nCantidad, fechaV:$scope.dFecha});
        
      }

  }]);
