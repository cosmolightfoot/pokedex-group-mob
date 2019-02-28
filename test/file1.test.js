import makeCard from '../src/pokedex-component.js';
const test = QUnit.test;
QUnit.module('image-component test');



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
