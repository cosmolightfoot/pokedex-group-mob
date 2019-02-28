const test = QUnit.test;

QUnit.module('image-component test');

function makeCard(pokemon){
    const html = /*html*/`
    <li>
    <h3>Bulbasaur</h3>
    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
    <p><span>HP:</span><span>A:</span><span>D:</span></p></li>
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
                <p><span>HP:</span><span>A:</span><span>D:</span></p></li>
 `;
    //assert
    
    assert.htmlEqual(template, expected);
});
