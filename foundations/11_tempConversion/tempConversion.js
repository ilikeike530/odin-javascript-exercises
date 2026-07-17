function convertToCelsius(fahrenheitTemp) {
  return +((fahrenheitTemp - 32) * 5 / 9).toFixed(1);
}

function convertToFahrenheit(celsiusTemp) {
  return +(celsiusTemp * 9 / 5 + 32).toFixed(1);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
