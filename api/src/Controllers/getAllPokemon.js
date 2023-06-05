
const axios = require("axios");

module.exports = async (req, res) =>{
  try {
    const POKE_API = "https://pokeapi.co/api/v2/pokemon";
    const pokemonsUrl = await axios.get(POKE_API)
    const results = pokemonsUrl.data.results
    const allPokemon = [];
    for( const result of results) {
      const pokemonDetail = await axios.get(result.url)
      const pokemonInfo = pokemonDetail.data;
      const pokemon = {
        id: pokemonInfo.id,
        name: result.name,
        image: pokemonInfo.sprites.other["dream_world"].front_default,
        types: pokemonInfo.types.map(({ type }) => {
          const id = Number.parseInt(type.url.slice(31));
          const { name } = type;
          return { id, name };
        }),
        life: pokemonInfo.stats.find(
          (attribute) => attribute.stat.name === "hp"
        ).base_stat,
        attack: pokemonInfo.stats.find(
          (attribute) => attribute.stat.name === "attack"
        ).base_stat,
        defense: pokemonInfo.stats.find(
          (attribute) => attribute.stat.name === "defense"
        ).base_stat,
      };
      allPokemon.push(pokemon)
    }
    if(!pokemonsUrl) return res.status(400).send('Fallo algo')
        return res.status(200).json(allPokemon)
    } catch (error) {
    return res.status(500).send(error.message)
    
  }


}