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
        .when('/detalles/', {
            templateUrl: 'plantillas/detalles.html',
            controller: 'detalles'
        })
        .when('/404', {
            templateUrl: 'plantillas/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        })

}]);

miAppAngular.constant('configuracionGlobal', {
    'nombreDelSitio': 'Corporacion Rajuela',
    'api_url': 'http://localhost:8081/Spring4AngularJS',
    'carpeta_imagenes': '/imagenes/'
})