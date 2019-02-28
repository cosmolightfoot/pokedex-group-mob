import pokedex from '../data/pokedex.js';

function makeCard(pokemon){
    
    const pokeCase = pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1);
    const html = /*html*/`
    <li class="${pokemon.type_1}" style="background-color:${pokemon.color_1}">
    <h3>${pokeCase}</h3>
    <img src="${pokemon.url_image}">
    <p>HP: ${pokemon.hp} A: ${pokemon.attack} D: ${pokemon.defense}</p></li>
`;


    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


const pokeList = document.getElementById('pokedex-container');

export default function loadPokedex(){
    pokedex.forEach(pokemon => {
        const dom = makeCard(pokemon);
        pokeList.appendChild(dom);
    });
}