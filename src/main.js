import jsdom from 'jsdom';
import Portfolio from './Portfolio';

const url = 'http://www.ux.ua/ru/issue.aspx?code=MSICH';

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
