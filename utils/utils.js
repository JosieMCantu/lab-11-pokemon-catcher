import { pokemon } from '../data/data.js';
import { incrementCaught, incrementSeen } from './localStorageUtils.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
}

export function findById(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

export function setThreePokemon() {
    numberOfTurns++;
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const image1 = renderPokeImage(pokeOne);
    const image2 = renderPokeImage(pokeTwo);
    const image3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);

    const div = document.getElementById('pokemon-images');

    div.textContent = '';

    div.append(image1, image2, image3);
}

export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');
    image.src = pokemonItem.url_image;
    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        console.log(numberOfTurns);
        incrementCaught(pokemonItem._id);
        if (numberOfTurns < 5) {
            setThreePokemon();
        } else {
            window.location.assign('../results/index.html');
        }
    });

    return image;
}
