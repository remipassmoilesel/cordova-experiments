var log = function(msg, data, level) {
  level = level || 'INFO';
  console.log('[' + level + '] ' + msg);
  if (data) {
    console.log(data);
  }
};

// Launched when device is ready
document.addEventListener('deviceReady', function() {
  console.log("Device is ready yeaaaaa !");
}, false);

// application main module
var app = angular.module('app', ['ngRoute', 'ngMaterial']);

// routes and views
app.config(function($routeProvider) {
  $routeProvider
      .when('/weather', {templateUrl : 'partials/weather.html'})
      .when('/about', {templateUrl : 'partials/about.html'})
      .otherwise({redirectTo : '/weather'});
});
