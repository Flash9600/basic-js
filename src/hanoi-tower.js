const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 let turns=1;
  for (let i=1; i<disksNumber; i++){
    turns=(turns*2)+1;
  };
  let seconds =0;
  seconds =  Math.floor(turns/(turnsSpeed/3600));
  let result = new Object()
  result.turns = turns;
  result.seconds = seconds;
  return result;
};
