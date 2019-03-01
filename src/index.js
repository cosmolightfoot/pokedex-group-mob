import loadPokedex from '../src/pokedex-component.js';
import loadPaging from './paging-components.js';
import pageArray from '../src/page-array.js';
import pokedex from '../data/pokedex.js';

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokedex(pagedPokedex);
});

