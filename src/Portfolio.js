export default class Portfolio {
  constructor(instruments = {}) {
    this.instruments = instruments;
  }

  setInstrument() {
    return this.instruments;
  }
}
