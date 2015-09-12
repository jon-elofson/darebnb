
var Map = React.createClass({

  render: function () {
    var style = {
     height: '100%',
     width: '100%'
    };
    return (
    <div id="google-map" style={style}>

    </div>
    )
  },

  componentDidMount: function () {
    var map = new google.maps.Map(document.getElementById('google-map'), {
    center: {lat: 38.8833, lng: -100.0167},
    zoom: 5
  });
  }
})
