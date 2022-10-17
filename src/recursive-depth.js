const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, i = 0) {
    if (arr.findIndex(Array.isArray) === -1) {
      return 1
    }

    function goDeep(arr, depth, maxDepth, rest) {
      if (arr.length === 0) {
        if (rest.length === 0) return maxDepth;

        if (rest) {
          return goDeep(rest, 1, maxDepth, []);
        }
      }

      const [first, ...restArr] = arr;

      if (!Array.isArray(first)) {
        return goDeep(restArr, depth, maxDepth, rest);
      }

      const d = depth + 1;
      const md = d < maxDepth ? maxDepth : d;

      return goDeep(first, d, md, [...restArr, ...rest]);
    }

    return i === 2 ? goDeep(arr, 1, 1, []) : this.calculateDepth(arr, i + 1);
  }
}

module.exports = {
  DepthCalculator
};
