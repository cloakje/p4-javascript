let output = document.querySelector(".output");
let out = "";
fetch("./pokemon.json")
  .then((response) => response.json())
  .then((pokemon) => {
    for (let pokemons of pokemon) {
      out = `
        <h1> ${pokemons.name}</h1>
        <img src=${pokemons.img} alt="" />
`;
    }
    output.innerHTML = out;
  });
