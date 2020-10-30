const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if (reverse == false) this.reverse = false
    else this.reverse = true
  }


encrypt(message, key) {
  let result=[]
  if (!message || !key){throw new Error('Error')}
  message=message.toUpperCase()
  key=key.toUpperCase()
  let x=0
  for (let i=0; i<message.length;i++) {
    if(this.alpha.indexOf(message[i])==-1){
      result.push(message[i])
      x++
    }
    else result.push(this.alpha[(this.alpha.indexOf(message[i]) + this.alpha.indexOf(key[(i-x)%key.length])) % this.alpha.length])
  }
  if (!this.reverse) {
    return result.reverse().join('')
  }
  else return result.join('');
}


decrypt(message, key) {
  let result=[]
  if (!message || !key){throw new Error('Error')}
  message=message.toUpperCase()
  key=key.toUpperCase()
  let x=0
  for (let i=0; i<message.length;i++) {
    if(this.alpha.indexOf(message[i])==-1){
      result.push(message[i])
      x++
    }
    else {
      result.push(this.alpha[(this.alpha.indexOf(message[i]) - this.alpha.indexOf(key[(i-x)%key.length]) + this.alpha.length) % this.alpha.length])
    }
  }
  if (!this.reverse) {
    return result.reverse().join('')
  }
  else return result.join('');

}
}

module.exports = VigenereCipheringMachine;
