import { ServerPokemonList } from "./_components/ServerPokemonList";
import { PokemonListFrame } from "./_components/PokemonListFrame";
import { fetchPokemonList } from "./_components/fetchPokemonList";

export default async function Home() {
  const pokemons = await fetchPokemonList();
  return (
    <PokemonListFrame description="PokemonBox is Server Component">
      <ServerPokemonList pokemons={pokemons} />
    </PokemonListFrame>
  );
}
