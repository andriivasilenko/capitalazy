'use strict';

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _Portfolio = require('./Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

console.log(process.argv);
var url = 'http://www.ux.ua/ru/issue.aspx?code=';
var generalCommand = process.argv[2];

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _toArray(_process$argv$slice),
    command = _process$argv$slice2[0],
    parameters = _process$argv$slice2.slice(1);

// Initial portfolio


var pfPath = './data/portfolio.json';
var pfInstruments = JSON.parse(_fs2.default.readFileSync(pfPath).toString());
var pfSuppertedCodes = new Set(['MSICH', 'CEEN', 'DOEN', 'BAVL', 'UNAF', 'KUBI', 'GOLDI', 'IFGRUS', 'IFSHEV']);
var portfolio = new _Portfolio2.default(pfInstruments, pfPath, pfSuppertedCodes);

switch (command) {
  case 'put':
    portfolio.setInstruments(parameters);
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