function repeatString (string, count = 1) {
  if (count < 0) return "ERROR";
  let finalString = '';
  for (let i = 0; i < count; i++) {
    finalString += string;
  }
  return finalString;
}

// Do not edit below this line
module.exports = repeatString;
