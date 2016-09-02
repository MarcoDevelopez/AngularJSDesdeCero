var miAppAngular = angular.module('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'plantillas/inicio.html',
    controller: 'inicio'
  })
  .when('/galeria', {
    templateUrl: 'plantillas/galeria.html'
  })
  .when('/mapa', {
    templateUrl: 'plantillas/mapa.html'
  })
  .when('/contacto', {
    templateUrl: 'plantillas/contacto.html'
  })
}]);