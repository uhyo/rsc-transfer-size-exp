import { ClientPokemonList } from "../_components/ClientPokemonList";
import { PokemonBox } from "../_components/PokemonBox";
import { PokemonListFrame } from "../_components/PokemonListFrame";
import { fetchPokemonList } from "../_components/fetchPokemonList";

export default async function Home() {
  const pokemons = await fetchPokemonList();
  return (
    <PokemonListFrame description="PokemonBox is Client Component">
      <ClientPokemonList pokemons={pokemons} />
    </PokemonListFrame>
  );
}
