import Portfolio from '../lib/Portfolio';

const data = {
  'MSICH': {
    'name': 'Мотор Сич, аз',
    'price': 23.02,
    'lastPrice': 23.08,
    'amount': 1,
  },

  'BAVL': {
    'name': 'Банк Аваль, аз',
    'price': 23.02,
    'lastPrice': 23.08,
    'amount': 1,
  },

  'CEEN': {
    'name': 'Центренерго, аз',
    'price': 23.02,
    'lastPrice': 23.08,
    'amount': 1,
  },
}

describe('test hasInstrument', () => {
  test('stock ', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('MSICH')).toBe(true);
  });

  test('a wrong stock', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('MSIC')).toBe(false);
  });

  test('in lower case', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('ceen')).toBe(true);
  });
});
