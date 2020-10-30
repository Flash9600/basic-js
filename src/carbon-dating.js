const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string")  {
  let N= Number(sampleActivity);
    if (N>0 && N<=15 && sampleActivity==N){
      N= N.toFixed(2);
    let k= 0.693/HALF_LIFE_PERIOD
    let result = Math.log(MODERN_ACTIVITY/N)/k;
    result= Math.ceil(result);

    return result;
    };
    return false;
  };
    return false;
  }

