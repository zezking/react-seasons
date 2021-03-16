import React from "react";

class App extends React.Component {
  //react says we have to do render
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      //we called setState!!!!!!
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)

      //never use this.state.lat=position.coords.latitude never!!!
    );
  }
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

export default App;
