var Index = React.createClass({

  getInitialState: function () {
    return { places: PlaceStore.all() };
  },

  componentDidMount: function () {
    this.store = PlaceStore;
    var that = this;
    this.store.addChangeListener(function () {
      that.setState({places: PlaceStore.all()});
      that.render();
    });
    ApiUtil.fetchPlaces();
  },

  render: function () {
    var that = this;
    return (
      <div className="Index col-md-3">
         <li>{that.state.places[0].name}</li>
      </div>
    );
  },



});
