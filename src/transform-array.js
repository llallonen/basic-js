const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw Error("\'arr\' parameter must be an instance of the Array!");
  }
  if (array == []) { return array }

  let arrayRes = [...array];

  for (let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case '--discard-next':
        arrayRes[i+1] = 'empty';
        i+=2
        break
      case '--discard-prev':  
        if (typeof array[i-1] != 'string') {
          arrayRes[i-1] = 'empty'
          arrayRes[i] = 'empty'
          i++ 
        }
        break
      case '--double-next':
        arrayRes[i] = arrayRes[i+1]
        break
      case '--double-prev':
        arrayRes[i] = arrayRes[i-1]
        break
    }
  }
  array = arrayRes.filter(item => {
    if (item !== 'empty' && item !== '--double-next' && item !== '--double-prev' && item !== '--discard-prev' && item !== '--discard-next') {
      return item;
    }
  });
  
  return array;
}

module.exports = {
  transform
};
