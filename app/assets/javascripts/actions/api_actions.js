ApiActions = {
  receiveAll: function (places) {
    AppDispatcher.dispatch({
      actionType: PlaceConstants.PLACES_RECEIVED,
      places: places
    });
  }
};
