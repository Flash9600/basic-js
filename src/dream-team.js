const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 let mem=[];
 if(!Boolean(members)|| !Array.isArray(members)||members.length == 0){return false}
console.log (members[2]);
 for ( let i = 0; i < members.length; i++){
     if (typeof members[i]=='string'){
      members[i]=members[i].replace(/\s/g, '');
      mem.push(members[i].charAt(0).toUpperCase());
     }
  };

  return mem.sort().join('');
}