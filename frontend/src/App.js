import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChampionListsApp from "./components/ChampionListsApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ChampionListsApp/>
      </div>
    );
  }
}

export default App;
