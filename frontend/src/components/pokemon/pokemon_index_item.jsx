import React, { Component } from 'react';
import './pokemon.css';

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li className='poke-stats'>
      <div className='tb-entry'>{pokemon.id}</div>
      <div className='tb-entry'>{pokemon.name}</div>
      <div className='tb-entry'>{pokemon.cp}</div>
      <div className='tb-entry'>{pokemon.attack}</div>
      <div className='tb-entry'>{pokemon.defense}</div>
      <div className='tb-entry'>{pokemon.hp}</div>
      <div className='tb-entry'>{pokemon.generation}</div>
    </li>
  );
}

export default PokemonIndexItem;