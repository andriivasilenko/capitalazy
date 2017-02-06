import jsdom from 'jsdom';
import fs from 'fs';
import Portfolio from './Portfolio';


// const url = 'http://www.ux.ua/ru/issue.aspx?code=';
const [command, ...parameters] = process.argv.slice(2);

// Initial portfolio
const pfPath = './data/portfolio.json';
const pfInstruments = JSON.parse(fs.readFileSync(pfPath).toString());
const pfSupportCodes = new Set(['MSICH', 'CEEN', 'DOEN', 'BAVL', 'UNAF', 'KUBI', 'GOLDI', 'IFGRUS', 'IFSHEV']);
const portfolio = new Portfolio(pfInstruments, pfPath, pfSupportCodes);


const showVersion = () => {
  const version = JSON.parse(fs.readFileSync('package.json').toString()).version;
  console.info(`Version: ${version}`);
};

switch (command) {
  case 'version':
  case '-v':
  case '-version':

    showVersion();
    break;

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
