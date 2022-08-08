import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon, delPokemon] = useAxios();
  const addPokemon = async name => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${name}/`, formating);
  };
  const deletePokemon = async () => {
    delPokemon();
  };
  const formating = (data) => {
    return {
      img_front: data.sprites.front_default,      
      img_back: data.sprites.back_default,      
      name: data.name,      
      stats: data.stats      
    }
  }

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} del={deletePokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.img_front}
            back={cardData.img_back}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
