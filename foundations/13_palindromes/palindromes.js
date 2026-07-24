const palindromes = function (text) {
  let cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanText === cleanText.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
