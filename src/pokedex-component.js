export default function makeCard(pokemon){
    const pokeCase = pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1);
    const html = /*html*/`
    <li>
    <h3>${pokeCase}</h3>
    <img src="${pokemon.url_image}">
    <p>HP: ${pokemon.hp} A: ${pokemon.attack} D: ${pokemon.defense}</p></li>
`;

    
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}