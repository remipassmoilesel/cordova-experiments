// possible methods

// navigator.geolocation.getCurrentPosition
// navigator.geolocation.watchPosition
// navigator.geolocation.clearWatch

var PositionService = function($q) {
  this.$q = $q;
};
PositionService.prototype.$inject = ['$q'];

/**
 * Get weather by city name
 * @param city
 * @returns {*}
 */
PositionService.prototype.getCurrentPosition = function() {

  return this.$q(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve({
        lat : position.coords.latitude, lon : position.coords.longitude
      });
    }, reject);
  });

};

app.service('position', PositionService);


