
var Map = React.createClass({

  render: function () {
    var style = {
     height: '100%'
    };
    return (
    <div className="map col-md-8 col-md-offset-1" id="google-map" style={style}>

    </div>
    )
  },

  componentDidMount: function () {
    var map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 28.8833, lng: -50.0167},
    zoom: 3
  });
  }
})
