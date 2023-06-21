import { Pokemon } from "./fetchPokemonList";

export const PokemonBox: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="grid grid-rows-2 w-40 p-2 bg-yellow-100">
      <span className="row-start-1 col-start-1 justify-self-end text-gray-600">
        #{pokemon.id}
      </span>
      <span className="row-start-1 col-start-1 font-bold">
        {pokemon.nameJp}
      </span>
      <span className="row-start-2 text-sm">{pokemon.name}</span>
    </div>
  );
};
