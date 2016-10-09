app.component("weatherResult", {
  templateUrl : "templates/weatherResult.html",
  bindings : {
    'city' : '<',
    'country' : '<',
    'description' : '<'
  }
});