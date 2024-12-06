import React from 'react';
import './PokemonDetails.css';

function PokemonDetails({ pokemon, evolutionChain, onBack, fetchPokemon }) {
  const renderEvolutionChain = (chain) => {
    if (!chain) return null;
    const evolutions = [];
    let current = chain;

    while (current) {
      evolutions.push(current);
      current = current.evolves_to[0];
    }

    return (
      <div className="evolution-chain">
        {evolutions.map((evolution, index) => (
          <div key={index} onClick={() => fetchPokemon(evolution.species.name)} className="evolution-item">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${evolution.species.url.split('/')[6]}.gif`} alt={evolution.species.name} />
            <p>{evolution.species.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pokemon-details">
      <button onClick={onBack} className="back-button">Back to List</button>
      <h2>{pokemon.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt={pokemon.name} />
      <div className="pokemon-info">
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Type:</strong> {pokemon.types.map(type => <span key={type.type.name} className={`type type-${type.type.name}`}>{type.type.name}</span>)}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      </div>
      {renderEvolutionChain(evolutionChain)}
    </div>
  );
}

export default PokemonDetails;
