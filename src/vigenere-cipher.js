const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool){
    this.flag = bool
    this.alf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.result=[];
  }
  encrypt(massage, key) {
    if (this.massage==undefined|| this.key == undefined) throw new CustomError('THROWN');
    this.masLit=[];
    this.keyLit=[];
    this.massage=this.massage.toUpperCase();
    this.key=this.key.toUpperCase();
    for(this.i=0; i<Math.max(massage.length, key.length); i++){
      if(i>massage.length) {
        this.masLit.push(massage[i%massage.length].charCode(0));
      }else{
        this.masLit.push(massage[i].charCode(0));
      }
      if(this.masLit[i]<65||this.masLit[i]>91){
        this.keyLit.push(0)
      }
      if(i>key.length) {
        this.keyLit.push(key[i%key.length].charCode(0));
      }else{
        this.keyLit.push(key[i].charCode(0));
      }

    };
    for(this.i=0; i<Math.max(massage.length, key.length); i++){
      this.result.push(String.fromCharCode(this.masLit[i]+this.keyLit[i]))
    }
    if (this.flag==true){
       return this.result.join('');
    }else return this.result.reverse().join('');
  }
  decrypt(massage, key) {
    if (this.massage==undefined|| this.key == undefined) throw new CustomError('THROWN');
    this.masLit=[];
    this.keyLit=[];
    this.massage=this.massage.toUpperCase();
    this.key=this.key.toUpperCase();
    for(this.i=0; i<Math.max(massage.length, key.length); i++){
      if(i>massage.length) {
        this.masLit.push(massage[i%massage.length].charCode(0));
      }else{
        this.masLit.push(massage[i].charCode(0));
      }
      if(this.masLit[i]<65||this.masLit[i]>91){
        this.keyLit.push(0)
      }
      if(i>key.length) {
        this.keyLit.push(key[i%key.length].charCode(0));
      }else{
        this.keyLit.push(key[i].charCode(0));
      }

    };
    for(this.i=0; i<Math.max(massage.length, key.length); i++){
      this.result.push(String.fromCharCode(this.masLit[i]-this.keyLit[i]))
    }
    if (this.flag==true){
       return this.result.join('');
    }else return this.result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
