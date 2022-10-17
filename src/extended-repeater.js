const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const defaults = {
  	addition: '',
  	separator: '+',
    additionSeparator: '|',
    additionRepeatTimes: 0,
    repeatTimes: 0
  }
  
  let {
  	addition,
    additionSeparator,
    additionRepeatTimes,
    repeatTimes,
    separator
  } = Object.assign(defaults, options)
  
  addition = Array(additionRepeatTimes || 1).fill(`${addition}`).join(additionSeparator)
  
  str = Array(repeatTimes || 1).fill(`${str}${addition}`).join(separator)
  
  return str
}

module.exports = {
  repeater
};
