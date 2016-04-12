function customersController($http,$scope) {
  $http.get("results.json").success(function(response) {$scope.names = response;});
}
