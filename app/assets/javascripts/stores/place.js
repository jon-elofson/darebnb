(function (root) {

  var _places = [];

  var CHANGE_EVENT = "change";

  var resetPlaces = function(places) {
    _places = places;
  };

  root.PlaceStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _places.slice(0);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
    if (payload.actionType === PlaceConstants.PLACES_RECEIVED) {
        resetPlaces(payload.places);
        PlaceStore.emit(CHANGE_EVENT);
    }
  })
  });

})(this);
