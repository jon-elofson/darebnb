(function (root) {

  var resetPlaces = function(places){
  _places = places;
  };

  var _places = [];

  root.PlaceStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _places.slice(0);
    },
    dispatcherID: AppDispatcher.register(function (payload) {
    if(payload.actionType === PlaceConstants.PlACES_RECEIVED){
        resetPlaces(payload.places);
    }
  })
  }

})(this)
