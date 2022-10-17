const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  stringifiedChain: "",

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    value !== undefined ? this.chains.push('( ' + value + ' )') : this.chains.push('( )');
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.chains.length - 1 || typeof position !== 'number') {
      this.chains = []
      throw new Error("You can't remove incorrect link!");
    }

    this.chains.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },

  finishChain() {
    this.stringifiedChain = this.chains.join('~~')
    this.chains = []
    return this.stringifiedChain;
  }
};

module.exports = {
  chainMaker
};
