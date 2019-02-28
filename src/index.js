import makeCard from './pokedex-component.js';
import pokedex from '../data/pokedex.js';

const pokeList = document.getElementById('pokedex-container');

pokedex.forEach(pokemon => {
    const dom = makeCard(pokemon);
    pokeList.appendChild(dom);
});
