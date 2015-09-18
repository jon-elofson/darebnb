(function (root) {

  var _places = [];

  var resetPlaces = function(places) {
    _places = places;
  };

  root.PlaceStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _places.slice(0);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
    if (payload.actionType === PlaceConstants.PLACES_RECEIVED) {
        resetPlaces(payload.places);
    }
  })
  });

})(this);
