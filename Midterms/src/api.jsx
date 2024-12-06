const api = {
  async getPokemon(region) {
    const response = await fetch(`https://pokeapi.co/api/v2/region/${region}/`);
    return response.json();
  },
};

export default api;