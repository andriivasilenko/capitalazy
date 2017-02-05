import jsdom from 'jsdom';
import fs from 'fs';
import Portfolio from './Portfolio';

console.log(process.argv);
const url = 'http://www.ux.ua/ru/issue.aspx?code=';
const generalCommand = process.argv[2];
const [command, ...parameters] = process.argv.slice(2);

// Initial portfolio
const pfPath = './data/portfolio.json';
const pfInstruments = JSON.parse(fs.readFileSync(pfPath).toString());
const pfSuppertedCodes = new Set(['MSICH', 'CEEN', 'DOEN', 'BAVL', 'UNAF', 'KUBI', 'GOLDI', 'IFGRUS', 'IFSHEV']);
const portfolio = new Portfolio(pfInstruments, pfPath, pfSuppertedCodes);

switch (command) {
  case 'put':
    portfolio.setInstruments(parameters);
    break;
  default:
    console.log('Незнакомая команда! Попробуйте проверить правильность набора и проверить еще раз!');
}

/* console.log(process.argv);
console.log(utilityName);
console.log(command);
console.log(parameters);

 jsdom.env(
  url,
  ['http://code.jquery.com/jquery.js'],
  (err, window) => {
    if (err) {
      throw err;
    }
    let instrumentBid = window.$(".pname:contains('Покупка') + ").text();
    let instrumentName = window.$(".pname:contains('Название') + ").text();
    console.log(instrumentName + ' ' + instrumentBid);
  }
);
*/
