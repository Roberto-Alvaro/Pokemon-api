const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

//document.getElementById(".pokemon-container").value = "";
bandera = false

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerPokemon(input.value);
});

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
    });
}

function crearPokemon(pokemon) {

    //if (bandera == true){
        //window.alert("bandera entra")
        //document.getElementById("input").value = "";
    //}

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(4, 0)}`;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const card = document.createElement("div");
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(number)

    pokemonContainer.appendChild(card);
    //bandera = true
}





/*const pokemonContainer = document.querySelector('.pokemon-container')

function fetchPokemon(id) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data)
    })
}

function fetchPokemons(number){
    for (let i=1; i <= number; i++){
        fetchPokemon(i)
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div')
    card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-conainer')

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite)

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p")
    name.classList.add('name')
    name.textContent = pokemon.name

    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    pokemonContainer.appendChild(card)
}

fetchPokemons(9);*/