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
      <div className="index col-md-3">

      </div>
    );
  },



});
