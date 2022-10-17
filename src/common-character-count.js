const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let max;
   
   if (s1.length > s2.lenght) {
    max = s1;
   } else {
    max = s2;
   }
   
   const result = [];
   let count = 1;
   let symbol;
   let char;
   let charToTest;
 
   for (let i = 0; i < max.length; i++) {
     charToTest = max.charAt(i);
     symbol = charToTest;
 
     while (s2.includes(charToTest) && s1.includes(charToTest)) {
 
    char = charToTest
       count++
       charToTest = charToTest + symbol;
     }
     
     if (!!char && !result.includes(char)) {
       result.push(char)
     }
 
     char = "";
     count = 1;
   }
 
   return result.join('').length;
}

module.exports = {
  getCommonCharacterCount
};
