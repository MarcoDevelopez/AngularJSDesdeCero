miAppAngular.controller('navegacionControl', function ($scope, $location, configuracionGlobal) {
  $scope.esActivo = function (rutaActual) {
    return rutaActual === $location.path();
  }
  
  $scope.config = configuracionGlobal;
  
});