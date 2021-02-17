
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 1 && position < this.chain.length) this.chain.splice(position - 1, 1); 
      else {this.chain = []; throw Error('Position is wrong!')};
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newChain = this.chain.map(el => typeof(el) === 'undefined' ? el = `(( ))` : el = `( ${el} )`).join('~~');
    this.chain = [];
    return newChain;
  }
};

module.exports = chainMaker;
