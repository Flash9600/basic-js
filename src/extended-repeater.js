const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  let result = ``;
  obj = options;
  let res=''
  if (typeof options.separator !== 'string') options.separator='+'

    if (typeof options.additionSeparator !== 'string') options.additionSeparator='|'
      if(options.addition === undefined){
        res=''
      }else if(options.additionRepeatTimes === undefined){
        res =`${options.addition}`;
      }else{
        for (let i =0; i < options.additionRepeatTimes-1; i++) {
          res =`${res}${options.addition}${options.additionSeparator}`
        }
        res =`${res}${options.addition}`
      }


    if(options.repeatTimes == undefined){
      result= `${str}${res}`
    }else{
    for(let i=0; i < options.repeatTimes-1; i++){

      result+= `${str}${res}${options.separator}`
    }
    result= `${result}${str}${res}`
    }

    return result
}