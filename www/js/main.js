

// launched when cordova ready
document.addEventListener('deviceReady', function() {
  console.log("Device is ready yeaaaaa !")
}, false);

// application main module
var app = angular.module('app', ['ngRoute', 'ngMaterial']);

// routes and views
app.config(function($routeProvider) {
  $routeProvider
      .when('/home', {templateUrl : 'partials/home.html'})
      .when('/about', {templateUrl : 'partials/about.html'})
      .otherwise({redirectTo : '/home'});
});