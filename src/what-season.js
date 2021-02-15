

module.exports = function getSeason(date) {
    if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) != '[object Date]') throw Error;
    const month = date.getMonth();
    if (month >= 2 && month < 5) return 'spring';
    if (month >= 5 && month < 8) return 'summer';
    if (month >= 8 && month < 11) return 'fall';
    if (month === 0 || month === 11 || month === 1) return 'winter';
    throw Error;
  }
    
  
  
