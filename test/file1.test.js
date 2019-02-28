import makeCard from '../src/pokedex-component.js';
const test = QUnit.test;
QUnit.module('image-component test');

const pokemon = {
    'pokemon': 'bulbasaur',
    'attack': 49,
    'defense': 49,
    'hp': 45,
    'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    'pokedex': 'http://www.pokemon.com/us/pokedex/bulbasaur',
    'type_1': 'grass'
};

test('vuild image template', function(assert) {
    //arrange
   
    //act
    const template = makeCard(pokemon);
    const expected = /*html*/`
            <li class="grass" style="background-color:${pokemon.color_1}">
                <h3>Bulbasaur</h3>
                <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
                <p>HP: 45 A: 49 D: 49</p></li>
 `;
    //assert
    
    assert.htmlEqual(template, expected);
});

test('add class that is same as type', assert => {
    //arrange 

    //act
    const template = makeCard(pokemon);

    const expected = /*html*/`
    <li class="grass" style="background-color:${pokemon.color_1}">
        <h3>Bulbasaur</h3>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
        <p>HP: 45 A: 49 D: 49</p></li>
`;


    //assert
    assert.htmlEqual(template, expected)
});