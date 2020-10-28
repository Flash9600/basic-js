const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const array = new Array()
  if (Array.isArray(arr)){
    if (arr.length==0){ return arr};
    for (let i=0; i<arr.length; i++){
      let el=arr[i];
       if(el==='--discard-next'){
          if(i== arr.length-1) continue;
          if(arr[i+2]==='--discard-prev') continue;
          i+=2;
       }else if (el==='--discard-prev'){
          if(i == 0) {continue}
          array.pop(arr[i-1]);
      }else if (el==='--double-next'){
          if(i== arr.length-1){continue}
          array.push(arr[i+1]);
       }else if (el==='--double-prev'){
        if(arr[i-2]==='--discard-next') continue;
          if(i == 0){continue}
          array.push(arr[i-1]);
      }else{
        array.push(el);
      }
    }

  return array;
  }else {
    throw new Error('THROWN');
  }
};
