'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Portfolio = function () {
  function Portfolio() {
    var instruments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var portfolioPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './data/portfolio.json';
    var supportedInstruments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

    _classCallCheck(this, Portfolio);

    this.instruments = instruments;
    this.supportedInstruments = supportedInstruments;
    this.portfolioPath = portfolioPath;
  }

  _createClass(Portfolio, [{
    key: 'hasInstrument',
    value: function hasInstrument(code) {
      return Object.keys(this.instruments).includes(code.toUpperCase());
    }
  }, {
    key: 'isSupported',
    value: function isSupported(code) {
      return this.supportedInstruments.has(code.toUpperCase());
    }
  }, {
    key: 'setInstrument',
    value: function setInstrument(code) {
      if (!this.hasInstrument(code) && this.isSupported(code)) {
        this.instruments[code.toUpperCase()] = {};
      }
    }
  }, {
    key: 'setInstruments',
    value: function setInstruments(codes) {
      var _this = this;

      codes.forEach(function (code) {
        return _this.setInstrument(code);
      });
      this.updateInstruments();
    }
  }, {
    key: 'updateInstruments',
    value: function updateInstruments() {
      _fs2.default.writeFileSync(this.portfolioPath, JSON.stringify(this.instruments));
    }
  }]);

  return Portfolio;
}();

exports.default = Portfolio;