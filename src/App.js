import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchSystem/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ritani Coding Challenge</h1>
        </header>
        <p className="App-intro">
        </p>
        <Search/>
      </div>
    );
  }
}

export default App;
