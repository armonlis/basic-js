

module.exports = function getSeason(date) {
    if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) != '[object Date]') throw Error;
    const month = date.getMonth();
    return month >= 2 && month < 5 ? 'spring' : month >= 5 && month < 8 ? 'summer' : month >= 8 && month < 11 ? 'fall' : 'winter';
}
    
  
  
