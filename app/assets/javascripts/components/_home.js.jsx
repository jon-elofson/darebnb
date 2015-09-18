var HomeBox = React.createClass({
  render: function () {
  var style = {
    height: '100vh',
    width: '100vw'
  };
  return (
    <div className="HomeBox row" style={style}>
      <Index/>
      <Map/>
    </div>
  );
  }
})
