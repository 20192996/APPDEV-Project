import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import pokeball from './pokeball.png'; // Import the Pokéball image

function App() {
  const [region, setRegion] = useState('kanto');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState(null);
  const [selectedType, setSelectedType] = useState(''); // State for selected type

  useEffect(() => {
    const fetchRegionPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`);
      const data = await response.json();
      setPokemonList(data.pokemon_entries);
    };

    fetchRegionPokemon();
  }, [region]);

  const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setSelectedPokemon(data);
    fetchEvolutionChain(data.species.url);
  };

  const fetchEvolutionChain = async (speciesUrl) => {
    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();
    setEvolutionChain(evolutionData.chain);
  };

  const handlePokemonClick = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    fetchPokemon(data.name);
  };

  const handleBackToList = () => {
    setSelectedPokemon(null);
    setEvolutionChain(null);
  };

  // Filter function to get Pokémon by selected type
  const filteredPokemonList = selectedType
    ? pokemonList.filter((pokemon) =>
        pokemon.pokemon_species.types.some((type) => type.type.name === selectedType)
      )
    : pokemonList;

  return (
    <div className="App">
      <Header />
      <div name="box">
        <hr />
        <h1>
          <img src={pokeball} alt="Pokéball" style={{ width: '100px', marginRight: '20px' }} /> <br />
          Pokédex
        </h1>
        <SearchBar fetchPokemon={fetchPokemon} setRegion={setRegion} />
        <div>
          {/* Buttons for filtering Pokémon types */}
          <button onClick={() => setSelectedType('fire')}>Fire</button>
          <button onClick={() => setSelectedType('water')}>Water</button>
          <button onClick={() => setSelectedType('grass')}>Grass</button>
          <button onClick={() => setSelectedType('')}>All</button>
        </div>
        <hr />
      </div>
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} evolutionChain={evolutionChain} onBack={handleBackToList} fetchPokemon={fetchPokemon} />
      ) : (
        <PokemonList pokemonList={filteredPokemonList} onPokemonClick={handlePokemonClick} />
      )}
      <Footer />
    </div>
  );
}

export default App;