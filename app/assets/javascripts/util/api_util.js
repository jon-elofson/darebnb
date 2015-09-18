ApiUtil = {
  fetchPlaces: function(){
    $.ajax({
      url: "/places",
      dataType: "json",
      method: "GET",
      success: function () {
        ApiActions.receiveAll(places);
      }
    });
  }
};
