import React, { Component } from 'react';
import './App.css';
import CounterContainer from './components/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <p>COUNTER</p>
        <CounterContainer />
      </div>
    );
  }
}

export default App;
