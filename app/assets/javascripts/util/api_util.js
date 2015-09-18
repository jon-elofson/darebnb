ApiUtil = {
  fetchPlaces: function(){
    $.ajax({
      url: "/places",
      dataType: "json",
      method: "GET",
      success: function (places) {
        ApiActions.receiveAll(places);
      }
    });
  }
};
