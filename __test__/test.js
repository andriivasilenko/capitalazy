import fs from 'fs';
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

describe('test Constructor', () => {
  test('instruments is empty', () => {
    const pf = new Portfolio();
    expect(pf.instruments).toEqual({});
  });
  test('instruments has stocks', () => {
    const pf = new Portfolio({ MSICH: 'something' });
    expect(pf.instruments).not.toEqual({});
  });
});

describe('test hasInstrument', () => {
  test('stock ', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('MSICH')).toBeTruthy();
  });

  test('a wrong stock', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('MSIC')).toBeFalsy();
  });

  test('in lower case', () => {
    const pf = new Portfolio(data);
    expect(pf.hasInstrument('ceen')).toBe(true);
  });
});

describe('test setInstrument', () => {
  const pf = new Portfolio({}, '', new Set(['MSICH', 'CEEN']));
  test('one stock', () => {
    pf.setInstrument('MSICH');
    expect(pf.hasInstrument('MSICH')).toBeTruthy();
  });
  test('a wrong stock', () => {
    pf.setInstrument('JOJO');
    expect(pf.hasInstrument('JOJO')).toBeFalsy();
  });
  test('in lower case', () => {
    pf.setInstrument('CeeN');
    expect(pf.hasInstrument('CEEN')).toBeTruthy();
  });
});

describe('test setInstruments', () => {
  const pf = new Portfolio({}, '', new Set(['MSICH', 'CEEN', 'BAVL', 'DOEN', 'IFGRUS']));
  test('add stocks', () => {
    pf.setInstruments(['MSiCH', 'CEEN']);
    expect(pf.hasInstrument('MSICH')).toBeTruthy();
    expect(pf.hasInstrument('CEEN')).toBeTruthy();
  });
  test('add a wrong stocks ', () => {
    pf.setInstruments(['JOJO', 'something']);
    expect(pf.hasInstrument('JOJO')).toBeFalsy();
    expect(pf.hasInstrument('something')).toBeFalsy();
  });
  test('add copies', () => {
    pf.setInstruments(['MSICH', 'CEEN']);
    const copiesCount = Object.keys(pf.instruments).filter(code => code === 'MSICH' || code === 'CEEN').length;
    expect(copiesCount).toBe(2);
  });
});

describe('test updatePortfolio', () => {
  const pf = new Portfolio({ CEEN: 'something' }, './test-portfolio.json');
  pf.updatePortfolio();
  const expectedData = fs.readFileSync('test-portfolio.json').toString();
  test('portfolio is updated', () => {
    expect(JSON.stringify(pf.instruments)).toBe(expectedData);
  });
});


/*
describe('', () => {

})
test('', () => {

})
*/
