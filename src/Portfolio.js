import fs from 'fs';

export default class Portfolio {
  constructor(instruments = {}, portfolioPath = './data/portfolio.json', supportInstruments = new Set()) {
    this.instruments = instruments;
    this.supportInstruments = supportInstruments;
    this.portfolioPath = portfolioPath;
  }

  hasInstrument(code) {
    return Object.keys(this.instruments).includes(code.toUpperCase());
  }
  isSupport(code) {
    return this.supportInstruments.has(code.toUpperCase());
  }
  setInstrument(code) {
    if (!this.hasInstrument(code) && this.isSupport(code)) {
      this.instruments[code.toUpperCase()] = {};
    }
  }
  setInstruments(codes) {
    codes.forEach(code => this.setInstrument(code));
    this.updateInstruments();
  }
  updateInstruments() {
    fs.writeFileSync(this.portfolioPath, JSON.stringify(this.instruments));
  }
  getInstrumentPrice(code) {
    return this.instruments[code].price;
  }
  getInstrumentPrevPrice(code) {
    return this.instruments[code].prevPrice;
  }
  getInstrumentName(code) {
    return this.instruments[code].Name;
  }
  getInstrumentAmount(code) {
    return this.instruments[code].amount;
  }

}
