miAppAngular.controller('detalles', function ($scope, $http, $routeParams, configuracionGlobal, $location) {
    $http.get(configuracionGlobal.api_url + '/user/' + $routeParams.empleadoId)
        .then(function (respuesta) {
            $scope.empleado = respuesta.data;
        });

    $scope.guardarInfo = function () {
        $http.put(configuracionGlobal.api_url + '/user/' + $routeParams.empleadoId, $scope.empleado)
            .then(function (respuesta) {
                $location.path('/');
            });
    }
});