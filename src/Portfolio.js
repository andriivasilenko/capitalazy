export default class Portfolio {
  constructor(instruments = {}) {
    this.instruments = instruments;
  }
  hasInstruments(code) {
    return Object.keys(this.instruments).includes(code) ? true : false;
  }
  setInstruments(code) {
    return code;
  }
}
