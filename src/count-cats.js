module.exports = function countCats(matrix) {
  return matrix.map(el => el.filter(el => el === '^^')).reduce((sum, val) => sum + val.length, 0)
}