import React, { Component } from "react";
import './Styles.css';
import FetchStudent from './components/profiles';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Container>
          <FetchStudent />
        </Container>
      </div>
    );
  }
}

export default App;
