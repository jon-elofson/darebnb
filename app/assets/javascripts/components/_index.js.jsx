var Index = React.createClass({

  getInitialState: function () {
    return { places: PlaceStore.all() };
  },

  componentDidMount: function () {
    this.store = PlaceStore;
    var that = this;
    this.store.addChangeListener(function () {
      that.setState({places: PlaceStore.all()});
    });
    ApiUtil.fetchPlaces();
  },

  render: function () {
    var that = this;
    return (
      React.createElement('div', {className: "index col-md-3"},
        that.state.places.forEach(function (place) {
          React.createElement('h1', {className: "index-header"}, place.name);
        })
      )
    );
  },

});
