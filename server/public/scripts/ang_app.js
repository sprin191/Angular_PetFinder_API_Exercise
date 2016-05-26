var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cats', {
      templateUrl: '/views/cats.html',
      controller: "catsController"
    })
    .when('/dogs', {
      templateUrl: '/views/dogs.html',
      controller: "dogsController"
    })
    .when('/horses', {
      templateUrl: '/views/horses.html',
      controller: "horsesController"
    })
    .otherwise({
      redirectTo: 'dogs'
    })
}]);
