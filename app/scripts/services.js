var configuradorServices = angular.module('configuradorServices', ['ngResource']);
 
configuradorServices.factory('Marca', ['$resource',
  function($resource){
    return $resource('servicios/marcas.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);
  
configuradorServices.factory('TiposCarnes', ['$resource',
  function($resource){
    return $resource('servicios/tiposCarnes.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);  
  