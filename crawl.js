var request = require('request');
var cheerio = require('cheerio');
request({
  url: 'https://www.taishinbank.com.tw/TS/TS06/TS0605/TS060502/index.htm?urlPath1=TS02&urlPath2=TS0202',
  method: 'GET'
}, function(error, response, body) {
if(error || !body) { return; }
  var $ = cheerio.load(body);
  var titles = $('title').text();
  console.log(titles);
  var USD = $('.table01 td')[65].children[0].data;
  var USD_In = $('.table01 td')[66].children[0].data;
  var USD_Out = $('.table01 td')[67].children[0].data;
  console.log(USD, USD_In, USD_Out);
});

