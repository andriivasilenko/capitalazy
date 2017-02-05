import fs from 'fs';

export default class Portfolio {
  constructor(instruments = {}, portfolioPath = './data/portfolio.json', supportedInstruments = new Set()) {
    this.instruments = instruments;
    this.supportedInstruments = supportedInstruments;
    this.portfolioPath = portfolioPath;
  }

  hasInstrument(code) {
    return Object.keys(this.instruments).includes(code.toUpperCase());
  }
  isSupported(code) {
    return this.supportedInstruments.has(code.toUpperCase());
  }
  setInstrument(code) {
    if (!this.hasInstrument(code) && this.isSupported(code)) {
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

}
