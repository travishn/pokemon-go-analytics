import React, { Component } from 'react';
import './pokemon.css';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }
  
  async componentDidMount() {
    try {
      const response = await fetch('/api/v1/pokemon');
      if (!response.ok) throw Error(response.statusText);

      const pokemon = await response.json();
      this.setState({ pokemon }, () => console.log(`Pokemon fetched...`, pokemon));
    } catch (error) {
      console.log(error);
    }
  }

  renderPokemon() {
    return (
      <ul className='pokemon-container'>
        {this.state.pokemon.map( pokemon => {
          return <PokemonIndexItem pokemon={pokemon} />
        })}
      </ul>
    );
  }

  render() {
    return (
      <section className='pokemon-wrapper'>
        <h2>Pokemon</h2>

        <div className='pokemon-table'>
          <div className='poke-headers'>
            <h4 className='tb-entry'>#</h4>
            <h4 className='tb-entry'>Pokemon</h4>
            <h4 className='tb-entry'>Max CP</h4>
            <h4 className='tb-entry'>Attack</h4>
            <h4 className='tb-entry'>Defense</h4>
            <h4 className='tb-entry'>Stamina</h4>
            <h4 className='tb-entry'>Gen</h4>
          </div>

          {this.renderPokemon()}
        </div>
      </section>
    )
  }
}

export default PokemonIndex;