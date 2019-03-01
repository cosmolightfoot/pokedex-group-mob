const test = QUnit.test;
import pageArray from '../src/page-array.js';
QUnit.module('building paging function');



const testArray = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
];

test('page one of four per page', function(assert) {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
    //act
    const page = pageArray(testArray, pagingOptions);
    const expected = ['one',
        'two',
        'three',
        'four'];
    //assert

    assert.deepEqual(page, expected);
});

test('page three of three per page', function(assert) {
    //arrange
    const pagingOptions = {
        page: 3,
        perPage: 3
    };
    //act
    const page = pageArray(testArray, pagingOptions);
    const expected = [
        'seven',
        'eight',
        'nine'];
    //assert

    assert.deepEqual(page, expected);
});