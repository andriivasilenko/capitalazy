'use strict';

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _Portfolio = require('./Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var url = 'http://www.ux.ua/ru/issue.aspx?code=';
var utilityName = process.argv[2];

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _toArray(_process$argv$slice),
    command = _process$argv$slice2[0],
    parameters = _process$argv$slice2.slice(1);

var portfolioSettings = JSON.parse(_fs2.default.readFileSync('../data/portfolio.json', 'UTF-8').toString());
var isSingleParameter = parameters.length === 1;
var portfolio = new _Portfolio2.default(portfolioSettings);

switch (command) {
  case 'put':

    switch (isSingleParameter) {
      case true:
        portfolio.setInstrument(parameters);
        break;
      case false:
        portfolio.setInstruments(parameters);
        break;
      default:
        if (parameters.length === 0) {
          console.log('Вам следует ввести хотя бы один код эмитента из списка доступных.');
        }
    }

    break;
  default:
    console.log('Незнакомая команда! Попробуйте проверить правильность набора и проверить еще раз!');
}

/* console.log(process.argv);
console.log(utilityName);
console.log(command);
console.log(parameters);

 jsdom.env(
  url,
  ['http://code.jquery.com/jquery.js'],
  (err, window) => {
    if (err) {
      throw err;
    }
    let instrumentBid = window.$(".pname:contains('Покупка') + ").text();
    let instrumentName = window.$(".pname:contains('Название') + ").text();
    console.log(instrumentName + ' ' + instrumentBid);
  }
);
*/