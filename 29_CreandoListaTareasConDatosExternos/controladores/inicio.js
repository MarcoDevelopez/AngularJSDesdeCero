miAppAngular.controller('inicio', function ($scope, configuracionGlobal) {
  $scope.config = configuracionGlobal;
  $http.get(configuracionGlobal.api_url + '/user/').then()
});