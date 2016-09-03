miAppAngular.controller('inicio', function ($scope, configuracionGlobal, $http, $location) {
    $scope.config = configuracionGlobal;
    $http.get(configuracionGlobal.api_url + '/user/')
        .then(function (respuesta) {
            $scope.empleados = respuesta.data;
        });

    $scope.verDetalles = function (id) {
        $location.path('/detalles');
    }
});