'use srtict';

// Библиотеки
require('../lib/Portfolio');
const assert = require('assert');
const fs = require('fs');

const instruments = fs.readFileSync('../src/instruments.json');
console.log(instruments);
var portfolio = new Portfolio(instruments);

describe('#JSON parser', () => {
  it('JSON', () => {
    assert.equal(3, 3);
  });
});
