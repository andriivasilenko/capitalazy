import jsdom from 'jsdom';
import fs from 'fs';
import Portfolio from './Portfolio';

const url = 'http://www.ux.ua/ru/issue.aspx?code=';
const utilityName = process.argv[2];
const [command, ...parameters] = process.argv.slice(2);
const portfolioSettings = JSON.parse(fs.readFileSync('../data/portfolio.json', 'UTF-8').toString());
const isSingleParameter = parameters.length === 1;
const portfolio = new Portfolio(portfolioSettings);

switch (command) {
  case 'put':

    switch (isSingleParameter) {
      case true:
        portfolio.setInstrument(parameters);
        break;
      case false:
        portfolio.setInstruments(parameters);
        break;
      default:
        if (parameters.length === 0) {
          console.log('Вам следует ввести хотя бы один код эмитента из списка доступных.');
        }
    }

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
