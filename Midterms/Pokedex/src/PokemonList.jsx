import React, { useEffect, useState } from 'react';

function PokemonList({ pokemonList, onPokemonClick }) {
  const [pokemonTypes, setPokemonTypes] = useState({});

  useEffect(() => {
    const fetchTypes = async () => {
      const types = {};
      for (const entry of pokemonList) {
        const response = await fetch(entry.pokemon_species.url);
        const data = await response.json();
        const pokemonResponse = await fetch(data.varieties[0].pokemon.url);
        const pokemonData = await pokemonResponse.json();
        types[entry.entry_number] = pokemonData.types.map(type => type.type.name);
      }
      setPokemonTypes(types);
    };

    fetchTypes();
  }, [pokemonList]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((entry) => (
        <div key={entry.entry_number} onClick={() => onPokemonClick(entry.pokemon_species.url)} className="pokemon-item">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${entry.entry_number}.gif`} alt={entry.pokemon_species.name} />
          <p>{entry.pokemon_species.name}</p>
          <div className="pokemon-types">
            {pokemonTypes[entry.entry_number] && pokemonTypes[entry.entry_number].map(type => (
              <span key={type} className={`type type-${type}`}>{type}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
