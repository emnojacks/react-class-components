// import logo from './logo.svg';
import './App.css';
import { Films } from './films';
import React, { Component } from 'react';

class App extends Component {
  render() {
      return (
    <div className="App">
          <Films
            //props
            favNumber={42}
            fname={"Em J"}
          />
      </div>
      )
  }
};

export default App;
