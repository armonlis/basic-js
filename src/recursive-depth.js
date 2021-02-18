module.exports = class DepthCalculator {
  constructor(arrTemp = [], count = 1, countTemp) {
    this.arrTemp = arrTemp,
    this.count = count,
    this.countTemp = countTemp;
  }
  
  calculateDepth(arr) {
    arr = arr.filter(el => Array.isArray(el));
    if (arr.length === 0) return this.count;
    arr.forEach(el => el.forEach(el => {if (Array.isArray(el)) this.arrTemp.push(el)}));
    arr = this.arrTemp;
    this.arrTemp = [];
    this.count++;
    if (arr.length > 0) return this.calculateDepth(arr);
        else {this.countTemp = this.count; this.count = 1; return this.countTemp};
  }
};

