/* this module cannot to take the test: spy1 = sinon.spy(instance, 'calculateDepth');
                                        assert.equal(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
                                        expect(spy1.callCount).to.be.greaterThan(1);
                                        spy1.restore();*/


/*module.exports = class DepthCalculator {
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
};*/


/*<-------------------------------------------------------------------------------------------------->
/* this module was writen to take the test const 
            spy1 = sinon.spy(instance, 'calculateDepth');
            assert.equal(calculateDepth([1, 2, 3, 4, 5, [1, []]]), 3);
            expect(spy1.callCount).to.be.greaterThan(1);
            spy1.restore();*/
module.exports = class DepthCalculator {
  constructor(arrTemp = [], count = 1, countTemp) {
    this.arrTemp = arrTemp,
    this.count = count,
    this.countTemp = countTemp;
  }
  
  calculateDepth(arr) {
    arr = arr.filter(el => Array.isArray(el));
    if (arr.length === 0) {this.countTemp = this.count; 
                           this.count = 1; 
                           return this.countTemp} 
        else {arr.forEach(el => el.forEach(el => {if (Array.isArray(el)) this.arrTemp.push(el)}))
              arr = this.arrTemp;
              this.arrTemp = [];
              this.count++; 
              return this.calculateDepth(arr)};

  }
}