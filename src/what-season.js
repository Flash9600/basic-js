const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
let result = '';
  if (typeof date == "undefined"){
    return 'Unable to determine the time of year!';
  }else if (isNaN(date.valueOf())&& date instanceof Date) {
    throw new CustomError('THROWN');
  }else if (date.constructor.toString().indexOf("Date") > -1||date.getMonth || typeof date.getMonth == "function"|| date.getMonth()>=0){
    let mounth = date.getMonth();
    if (mounth ==11||mounth <=1){
      result ='winter';
    }else if (mounth <= 4){
      result ='spring';
    }else if (mounth <=7){
      result= 'summer';
    }else if (mounth <=10){
      result ='autumn';
    };
  }else {
    throw new CustomError('THROWN');
  };
  return result
}
