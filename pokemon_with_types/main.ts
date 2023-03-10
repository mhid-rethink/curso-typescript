const pokemonNameForSearch: string = "bulbasaur";
const pokemonTypeForSearch: string = "grass";
const resultPokemonSearchByName: Pokemon | undefined = pokemons.find(
  (pokemon: Pokemon) => pokemon.name == pokemonNameForSearch
);

const resultPokemonSearchByType: Pokemon[] | undefined = pokemons.filter(
  (pokemon: Pokemon) => pokemon.type.includes(pokemonTypeForSearch)
);

const resultPokemonWithTranslatedType: Pokemon[] = pokemons.map(
  (pokemon: Pokemon) => {
    return {
      ...pokemon,
      type: pokemon.type.map(
        (type) => typesTranslation[type as keyof typeof typesTranslation]
      ),
    };
  }
);

console.log(resultPokemonSearchByName);
console.log(resultPokemonSearchByType);
console.log(resultPokemonWithTranslatedType);
// console.log(pokemons);
