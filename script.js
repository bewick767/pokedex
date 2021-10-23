let soundBite = document.getElementById('myAudio')

function playAudio() {
    soundBite.play()
}

const baseURL = 'https://pokeapi.co/api/v2/';
let url;

const searchTerm = document.querySelector('.search');
const button = document.querySelector('.submit');
const pokeInfo = document.querySelector('.pokeInfo');;

button.addEventListener('click', fetchResults);


function fetchResults(event) {
    event.preventDefault();

    url = `${baseURL}pokemon/${searchTerm.value}`;
    fetch(url, {
        method: "GET"
    })
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(pokedata) {

    while (pokeInfo.firstChild) {
        pokeInfo.removeChild(pokeInfo.firstChild);
    }


    let pokemon = document.createElement("h1")
    let image = document.createElement("img")
    let height = document.createElement("p")
    let weight = document.createElement("p")
    let types = document.createElement("p")

    image.src = pokedata.sprites.front_default
    image.style.width = "130px"
    image.style.height = "130px"
    image.style.position = "center"
    pokemon.innerText = pokedata.name[0].toUpperCase() + pokedata.name.slice(1).toLowerCase();

    function capitalize(pokemon) {
        return pokemon.innerText[0].toUpperCase() + pokemon.innerText.slice(1).toLowerCase();
    }


    height.innerText = "Height: " + pokedata.height + " units"
    weight.innerText = "Weight: " + pokedata.weight + " lbs."
    types.innerText = "Type: " + (pokedata.types.length === 2 ? (pokedata.types[0].type.name[0].toUpperCase() + pokedata.types[0].type.name.slice(1).toLowerCase() + " / " + pokedata.types[1].type.name[0].toUpperCase() + pokedata.types[1].type.name.slice(1).toLowerCase()) : (pokedata.types[0].type.name[0].toUpperCase() + pokedata.types[0].type.name.slice(1).toLowerCase()))



    pokeInfo.appendChild(pokemon)
    pokeInfo.appendChild(image)
    pokeInfo.appendChild(height)
    pokeInfo.appendChild(weight)
    pokeInfo.appendChild(types)


}







