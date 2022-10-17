const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function getAllIndexes(arr) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(-1, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
  }
  
let indexes = getAllIndexes(arr);
arr = arr.filter(item => item != -1).sort((a, b) => a - b);

for (let ind of indexes) {
  arr.splice(ind, 0, -1);
}
  
return arr;
}

module.exports = {
  sortByHeight
};
