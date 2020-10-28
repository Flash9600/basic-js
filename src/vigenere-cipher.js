const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool){
    this.flag = bool
    this.alf = ['A','B','C','D','E','F','G','H','I','J','K','L','','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.result='';
  }
  encrypt(massage, key) {
    if (massage==undefined|| key == undefined) throw new Error('Not implemented');
    this.masLit='';
    this.keyLit=''
    this.massage=this.massage.toUpperCase();
    this.key=this.key.toUpperCase();
    for(this.i=0; i<Math.max(massage.length, key.length); i++){
    if(i>massage.length) {
      this.masLit=massage[i%massage.length].charCode(0);
      this.masLit<65&&this.masLit>91?this.masLit=
    }else this.masLit=massage[i].charCode(0);
    if(i>key.length) {
      this.keyLit=key[i%key.length].charCode(0);
    }else this.keyLit=key[i].charCode(0);
    this.masLit=massage[i].charCode(0)
    this.keyLit=key[i].charCode(0);
    this.result+=this.alf[(this.masLit+this.keyLit)-130]
    };
    return this.result.toUpperCase();
  }
  decrypt(massage, key) {
    if (massage==undefined|| key == undefined) throw new Error('Not implemented');
  }
}

module.exports = VigenereCipheringMachine;
