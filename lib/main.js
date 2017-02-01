'use strict';

var _Portfolio = require('./Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var portfolio = new _Portfolio2.default({ a: 'b' });
console.log(portfolio.getInst().a);