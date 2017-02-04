export default class Portfolio {
  constructor(instruments = {}) {
    this.instruments = instruments;
  }
  hasInstrument(code) {
    return Object.keys(this.instruments).includes(code) ? true : false;
  }
  setInstrument(code) {
    return code;
  }
  setInstruments(code) {
    return code;
  }
}
