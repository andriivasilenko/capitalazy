export default class Portfolio {
  constructor(instruments = {}) {
    this.instruments = instruments;
  }

  setInstrument(code) {
    return this.instruments + code;
  }
}
