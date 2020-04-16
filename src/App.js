import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

class App extends Component {
  render() {
    return(
      <div>
        <Heading />
        <ScreenOne />
        <ScreenTwo />
      </div>
    );
  }
}

export default App;
