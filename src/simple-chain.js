const CustomError = require("../extensions/custom-error");

let chainMaker = {
  array: new Array(),
  getLength() {
    let result = this.array.length;
    this.array=[];
    return result;
  },
  addLink(value) {
    (value === undefined)? this.array.push('(  )'): this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if( typeof position != "number" || position < 0 || position > this.array.length || !Number.isInteger(position)){
     this.array=[];
     throw new Error()
   }
   check = (el) => { if(el !== chainMaker.array[position-1]){ return true}else{  return false;}}
   this.array = this.array.filter(check);
   return this;
  },
  reverseChain() {
   this.array.reverse();
   return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array=[];
    return result;
  }
};

module.exports = chainMaker;
