var http = require('http');
var ranNum = require('./modules/randomNumber.js');
// var convert = require('./modules/convertToDollars.js');
var three = require('./modules/moduleThree.js');

var server = http.createServer(function(request, response) {
  // console.log(ranNum(100, 1000000));
  // console.log(accountBalance());
  var rN = ranNum(100, 1000000);
  var rD = three.ranDollar(rN);
  console.log(three.accountBalance(rD));
  // response.writeHead(200);
  response.write('Hello World');
  response.end();

});
server.listen(3000);

//Learning
// console log goes to terminal and response() goes to console
