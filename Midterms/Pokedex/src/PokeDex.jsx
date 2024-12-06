import React, { useState, useEffect } from 'react';

const PokeDex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemon(data.results));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>PokeDex</h1>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search for a Pokémon" />
      <ul>
        {filteredPokemon.map((pokemon) => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeDex;