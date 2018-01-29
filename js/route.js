// main routing
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/home', {
    templateUrl: 'views/homepage.html',
    // all js operations
    controller: 'jsOperations'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'jsOperations'
  }).when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'jsOperations'
  }).when('/services', {
    templateUrl: 'views/services.html',
    controller: 'jsOperations'
  }).otherwise({
    redirectTo: '/home',
    controller: 'jsOperations'
  });
}]);
