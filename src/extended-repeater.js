module.exports = function repeater(str, options) {
  if (!(options.hasOwnProperty('repeatTimes'))) options.repeatTimes = 1; 
  if (!(Number.isInteger(options.repeatTimes) && options.repeatTimes >= 0 )) options.repeatTimes = 1;
  if (!(options.hasOwnProperty('separator'))) options.separator = '+'; 
  if (typeof(options.separator) != 'string') options.separator = '+';
  if (!(options.hasOwnProperty('addition'))) options.addition = ''; 
  if (!(options.hasOwnProperty('additionRepeatTimes'))) options.additionRepeatTimes = 1; 
  if (!(Number.isInteger(options.additionRepeatTimes) && options.additionRepeatTimes >= 0 )) options.additionRepeatTimes = 1;
  if (!(options.hasOwnProperty('additionSeparator'))) options.additionSeparator = '';
  if (typeof(options.additionSeparator) != 'string') options.additionSeparator = '|';
  str = String(str) + options.addition + (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1);
  str = str + (options.separator + str).repeat(options.repeatTimes - 1)
  return str;
};
