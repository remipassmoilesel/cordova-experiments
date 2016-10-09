/**
 * Weather service
 *
 * @param $http
 * @constructor
 */
var WeatherService = function($http) {

  this.apiKey = "b9c7388bd8089092c512116e2fcf6cc8";
  this.apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather";
  this.$http = $http;

};
WeatherService.prototype.$inject = ['$http'];

/**
 * Get weather by city name
 * @param city
 * @returns {*}
 */
WeatherService.prototype.getByTownName = function(city) {
  return this.$http.get(this.apiBaseUrl + "?q=" + city + "&appid=" + this.apiKey);
};

/**
 * Get weather by coordinates
 * @param lat
 * @param lon
 * @returns {*}
 */
WeatherService.prototype.getByCoordinates = function(lat, lon) {
  return this.$http.get(this.apiBaseUrl + "?lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey);
};

app.service('weather', WeatherService);

