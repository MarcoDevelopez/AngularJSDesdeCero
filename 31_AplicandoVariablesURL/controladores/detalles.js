miAppAngular.controller('detalles', function ($scope, $http, $routeParams, configuracionGlobal) {
    $http.get(configuracionGlobal.api_url + '/user/' + $routeParams.empleadoId)
        .then(function (respuesta) {
            $scope.empleado = respuesta.data;
        })
});