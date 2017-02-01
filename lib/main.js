'use strict';

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _Portfolio = require('./Portfolio');

var _Portfolio2 = _interopRequireDefault(_Portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'http://www.ux.ua/ru/issue.aspx?code=MSICH';

_jsdom2.default.env(url, ['http://code.jquery.com/jquery.js'], function (err, window) {
  if (err) {
    throw err;
  }
  var instrumentBid = window.$(".pname:contains('Покупка') + ").text();
  var instrumentFullName = window.$(".pname:contains('Название') + ").text();
  console.log(instrumentFullName + ' ' + instrumentBid);
});