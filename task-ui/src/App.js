import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Transactions />
      </div>
    );
  }
}

export default App;
