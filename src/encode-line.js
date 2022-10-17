const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let res = '';
  let tempCount = 1;
  
  for (let i=0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
       tempCount +=1;      
    } else {
     if (tempCount > 1) {
        res += tempCount + str[i];
     } else {
        res += str[i];
     }
     tempCount = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
