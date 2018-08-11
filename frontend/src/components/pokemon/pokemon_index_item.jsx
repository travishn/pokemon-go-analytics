import React, { Component } from 'react';
import './pokemon.css';

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li className='poke-stats'>
      <div className='tb-entry'>{pokemon.id}</div>
      <div className='tb-entry'>
        <img src={pokemon.image} />
        <div className='name-type-wrapper'>
          <h3>{pokemon.name}</h3>
          <div className='type-container'>
            <h3>{pokemon.type1}</h3>
            <h3>{pokemon.type2}</h3>
          </div>
        </div>
      </div>
      <div className='tb-entry'>{pokemon.cp}</div>
      <div className='tb-entry'>{pokemon.attack}</div>
      <div className='tb-entry'>{pokemon.defense}</div>
      <div className='tb-entry'>{pokemon.hp}</div>
      <div className='tb-entry'>{pokemon.generation}</div>
    </li>
  );
}

export default PokemonIndexItem;