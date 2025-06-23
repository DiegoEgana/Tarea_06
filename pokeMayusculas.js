let pokemon =
[
   'Pikachu',
   'Charmander',
   'Bulbasaur',
   'Squirtle'
]
let pokemonMayusculas = []
for (e in pokemon) {
    pokemonMayusculas.push(pokemon[e].toUpperCase());
    console.log(pokemonMayusculas[e]);
}
