"use client";

import { PokemonBox } from "./PokemonBox";
import { Pokemon } from "./fetchPokemonList";

export const ClientPokemonList: React.FC<{
  pokemons: readonly Pokemon[];
}> = ({ pokemons }) => {
  return pokemons.map((pokemon) => (
    <PokemonBox key={pokemon.id} pokemon={pokemon} />
  ));
};
