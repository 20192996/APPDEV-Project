import React, { useState } from 'react';

function SearchBar({ fetchPokemon, setRegion }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPokemon(searchTerm.toLowerCase());
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <select onChange={handleRegionChange}>
        <option value="kanto">Kanto</option>
        <option value="johto">Johto</option>
        <option value="hoenn">Hoenn</option>
        <option value="sinnoh">Sinnoh</option>
        <option value="unova">Unova</option>
        <option value="kalos">Kalos</option>
        <option value="alola">Alola</option>
        <option value="galar">Galar</option>
      </select>
    </div>
  );
}

export default SearchBar;
