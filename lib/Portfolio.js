"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Portfolio = function () {
  function Portfolio() {
    var instruments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Portfolio);

    this.instruments = instruments;
  }

  _createClass(Portfolio, [{
    key: "hasInstruments",
    value: function hasInstruments(code) {
      return Object.keys(this.instruments).includes(code) ? true : false;
    }
  }, {
    key: "setInstruments",
    value: function setInstruments(code) {
      return code;
    }
  }]);

  return Portfolio;
}();

exports.default = Portfolio;