import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonIndex from './components/pokemon/pokemon_index';

class App extends Component {
  render() {
    return (
        <PokemonIndex />
    );
  }
}

export default App;
