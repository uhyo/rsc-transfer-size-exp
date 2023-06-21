import { Client, fetchExchange, gql } from "@urql/core";
import { cache } from "react";

const client = new Client({
  url: "https://beta.pokeapi.co/graphql/v1beta",
  exchanges: [fetchExchange],
});

const query = gql<QueryResult, QueryInput>`
  query ($offset: Int!, $limit: Int) {
    species: pokemon_v2_pokemonspecies(
      where: {}
      order_by: { id: asc }
      offset: $offset
      limit: $limit
    ) {
      name
      id
      pokemon_v2_pokemonspeciesnames(where: { language_id: { _in: [9, 11] } }) {
        language_id
        name
      }
    }
  }
`;

type QueryResult = {
  species: readonly {
    readonly name: string;
    readonly id: number;
    readonly pokemon_v2_pokemonspeciesnames: readonly {
      language_id: 9 | 11;
      name: string;
    }[];
  }[];
};
export type QueryInput = {
  offset: number;
  limit?: number;
};

export type Pokemon = {
  id: number;
  name: string;
  nameJp: string;
};

async function fetchPokemonListImpl(): Promise<Pokemon[]> {
  const res = await client.query(query, { offset: 0 }).toPromise();
  if (res.error) {
    throw res.error;
  }
  if (!res.data) {
    throw new Error("No data");
  }
  return res.data.species.map((species) => ({
    id: species.id,
    name:
      species.pokemon_v2_pokemonspeciesnames.find(
        (name) => name.language_id === 9
      )?.name ?? "",
    nameJp:
      species.pokemon_v2_pokemonspeciesnames.find(
        (name) => name.language_id === 11
      )?.name ?? "",
  }));
}

export const fetchPokemonList = cache(fetchPokemonListImpl);
