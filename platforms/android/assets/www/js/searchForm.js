/**
 *
 * Weather search form component controller
 *
 * @param weather
 * @constructor
 */
var SearchFormController = function(weather, $mdDialog, position) {

  this.results = [];

  this.weatherService = weather;
  this.$mdDialog = $mdDialog;
  this.position = position;

};
SearchFormController.prototype.$inject = ['weather', '$mdDialog', 'position'];

/**
 * Show a simple toast
 * @param message
 */
SearchFormController.prototype.feedback = function(message, level) {

  level = level || "Error";

  this.$mdDialog.show(this.$mdDialog.alert()
      .clickOutsideToClose(true)
      .title(level)
      .textContent(message)
      .ok('OK'));

};

/**
 * Show error if something wrong
 */
SearchFormController.prototype.showErrorOnGui = function() {
  this.errorMessage = "Sorry, but weather is unavailable for now.";
};
SearchFormController.prototype.clearErrorOnGui = function() {
  this.errorMessage = "";
};

/**
 * Search weather by city name
 */
SearchFormController.prototype.searchCity = function() {

  log('Search weather by city name', this.city);

  this.clearErrorOnGui();

  var vm = this;

  if (!this.city || this.city.length < 2) {
    this.feedback("City name is invalid");
    return;
  }

  this.weatherService.getByTownName(this.city).then(function(result) {

    var data = result.data;

    vm.results.unshift({
      cityName : data.name,
      cityCountry : data.sys.country,
      weatherDescription : data.weather[0].description
    });

  }).catch(function() {
    vm.showErrorOnGui();
  });

};

/**
 * Search weather by latitude longitude
 */
SearchFormController.prototype.searchPosition = function() {

  this.clearErrorOnGui();

  var vm = this;

  this.position.getCurrentPosition().then(function(pos) {

    vm.weatherService.getByCoordinates(pos.lat, pos.lon).then(function(result) {

      var data = result.data;

      vm.results.unshift({
        cityName : data.name,
        cityCountry : data.sys.country,
        weatherDescription : data.weather[0].description
      });

    }).catch(function() {
      vm.showErrorOnGui();
    });

  }).catch(function() {
    vm.showErrorOnGui();
  });

};

app.component("searchForm", {

  templateUrl : "templates/searchForm.html",

  controller : SearchFormController
});
