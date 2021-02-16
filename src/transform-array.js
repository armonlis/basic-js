module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) != '[object Array]') throw Error;
  let newArr = arr.map(el => el === '--discard-next' || el === '--discard-prev' || el === '--double-next' || el === '--double-prev' ? el = '' : el);
  arr.map((el, i) => {
    if (el === '--discard-next') i != (arr.length - 1) && !(newArr[i + 1] ==='') ? newArr.splice(i + 1, 1, '') : 0;
    if (el === '--discard-prev') i != 0 && !(newArr[i - 1] ==='') ? newArr.splice(i - 1, 1, '') : 0;
    if (el === '--double-next') i != (arr.length - 1) && !(newArr[i + 1] ==='') ? newArr.splice(i, 1, arr[i + 1] ) : 0;
    if (el === '--double-prev') i != 0 && !(newArr[i - 1] ==='') ? newArr.splice(i, 1, arr[i - 1]) : 0;
  });
  return newArr.filter(el => !(el === ''));
};