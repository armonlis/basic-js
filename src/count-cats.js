module.exports = function countCats(matrix) {
  
  return matrix.map(el => el.filter(el => el === '^^')).reduce((sum, val) => sum + val.length, 0) 
  
  /*let ears = 0;
  matrix.forEach(el => el.forEach(el => el === '^^' ? ++ears : el));
  return ears*/    

  /*let ears = 0;
  matrix.forEach(el => el.forEach(el => {if (el === '^^') ++ears}));
  return ears*/    
  
  /*let ears = 0;
  for (i = 0; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === '^^') ++ears
    };
  }
   return ears*/    
}