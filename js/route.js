// main routing
app.config(['$routeProvider', '$locationProvider', function() {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/home', {
    templateUrl: 'views/homepage.html'
  }).when('/about', {
    templateUrl: 'views/about.html'
  }).when('/contact', {
    templateUrl: 'views/contact.html'
  }).when('/services', {
    templateUrl: 'views/services.html'
  })otherwise({
    redirectTo: '/home'
  });
}]);
