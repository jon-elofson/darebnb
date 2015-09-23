
var Map = React.createClass({

  getInitialState: function () {
    return { places: PlaceStore.all() };
  },


  render: function () {
    var style = {
     height: '100%',
    };
    return (
    <div className="map col-md-8 col-md-offset-1" id="google-map" style={style}>
    </div>
    )
  },

  addMap: function () {
    var map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 28.8833, lng: 0},
    zoom: 2
    });
    return map;
  },

  componentDidMount: function () {
    this.map = this.addMap();
    this.store = PlaceStore;
    var that = this;
    this.store.addChangeListener(function () {
      that.setState({places: PlaceStore.all()});
      that.addMarkers();
    });
    ApiUtil.fetchPlaces();
  },

  addMarkers: function () {
    var that = this;
    this.state.places.forEach(function (place) {
      var lat = place.lat
      var lng = place.long
      marker = new google.maps.Marker({
        map: that.map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: lat, lng: lng}
      });
    })
  }




})
