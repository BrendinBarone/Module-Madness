var ranNum = require('./randomNumber.js');
var convert = require('./convertToDollars.js');

function ranDollar(ranNum){
  return convert(ranNum);
}
function accountBalance(ranDollar) {
  return "Account Balance: \n" + ranDollar;
}



module.exports= {
  ranDollar: ranDollar,
  accountBalance: accountBalance, };
