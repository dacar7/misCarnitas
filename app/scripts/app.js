'use strict';

angular
  .module('ejercicio2App', [
    'ngResource',
    'ngRoute',
    'configuradorServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/directorio', {
        templateUrl: 'views/directorio.html',
        controller: 'DirectorioCtrl'
      })
      .when('/MisCarnitas', {
        templateUrl: 'views/miscarnitas.html',
        controller: 'MiscarnitasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
