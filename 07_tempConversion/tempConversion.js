const convertToCelsius = function(temp) {
  let result;
  result = (temp - 32) / 1.8;
  result = result.toFixed(1);
  return result-0;
};

const convertToFahrenheit = function(temp) {
  let result;
  result = temp * 1.8 + 32;
  result = result.toFixed(1);
  return result-0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
