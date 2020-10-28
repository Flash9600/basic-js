const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
//   constructor() {
//     this.dee = 1;
//     this.currentDee = 1;
// }
calculateDepth(arr) {

    if (Array.isArray(arr)) {
        if (arr.length==0){
        return 1;
         }
    return  Math.max(...arr.map(e => Array.isArray(e) ? this.calculateDepth(e) : 0)) + 1
    }else {
        return 0;
    }




}
};
