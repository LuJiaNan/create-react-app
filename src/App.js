import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestSetState from './testSetState';
import ClickTestSetState from './clickTestSetState'

class App extends Component {
  render() {
    return (
      // <TestSetState/>
      <ClickTestSetState/>
    );
  }
}

export default App;
