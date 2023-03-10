"use strict";
const pokemonNameForSearch = "bulbasaur";
const pokemonTypeForSearch = "grass";
const resultPokemonSearchByName = pokemons.find((pokemon) => pokemon.name == pokemonNameForSearch);
const resultPokemonSearchByType = pokemons.filter((pokemon) => pokemon.type.includes(pokemonTypeForSearch));
const resultPokemonWithTranslatedType = pokemons.map((pokemon) => {
    return Object.assign(Object.assign({}, pokemon), { type: pokemon.type.map((type) => typesTranslation[type]) });
});
console.log(resultPokemonSearchByName);
console.log(resultPokemonSearchByType);
console.log(resultPokemonWithTranslatedType);
// console.log(pokemons);
