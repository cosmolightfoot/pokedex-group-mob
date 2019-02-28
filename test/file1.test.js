const test = QUnit.test;

QUnit.module('image-component test');

function makeCard(pokemon){
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

test('vuild image template', function(assert) {
    //arrange
    const pokemon = {
        'pokemon': 'bulbasaur',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    //act
    const template = makeCard(pokemon);
    const expected = /*html*/`
            <li>
                <h3>Bulbasaur</h3>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
                <p>HP: 45 A: 49 D: 49</p></li>
 `;
    //assert
    
    assert.htmlEqual(template, expected);
});
