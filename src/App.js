import React, { Component } from "react";
import './Styles.css';
import FetchStudent from './components/profiles';

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchStudent />
      </div>
    );
  }
}

export default App;
