import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [pokemonI, setPokemonI] = useState(1); 
  const [pokemon, setPokemon] = useState({}); 

  const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (response.ok) {
      const data = await response.json();
      setPokemon({
        name: data.name,
        image: data.sprites.other.dream_world.front_default
      });
    } 
  };

  useEffect(() => {
    fetchPokemon(pokemonI);
  }, [pokemonI]);

  
  const nextPokemon = () => {
    setPokemonI(prevIndex => prevIndex + 1);
  };

  return (
    <div className="app">
        {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
        <h2>{pokemon.name}</h2>
        <button onClick={nextPokemon}>Outro Pokémon</button>
    </div>
  );
}
export default App;

