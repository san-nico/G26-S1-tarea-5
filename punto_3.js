export function main() {
  let pokemones = [
    {
      nombre: "Pikachu",
      tipo: "Electrico",
    },
    {
      nombre: "Charmander",
      tipo: "Fuego",
    },
    {
      nombre: "Bulbasaur",
      tipo: "Planta",
    },
    {
      nombre: "Squirtle",
      tipo: "Agua",
    },
    {
      nombre: "Charmeleon",
      tipo: "Fuego",
    },
    {
      nombre: "Weedle",
      tipo: "bicho",
    },
    {
      nombre: "Charizard",
      tipo: "Fuego",
    },
  ];

    const pokemones_fuego = pokemones.filter((pokemon) => pokemon.tipo === "Fuego");

    console.log(pokemones_fuego);
}
