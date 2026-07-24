const fibonacci = function(numberPositionString) {
  let numberPosition = +numberPositionString;
  if (!Number.isInteger(numberPosition) || numberPosition < 0 ) return "OOPS";
  if (numberPosition === 0) return 0;
  if (numberPosition === 1 || numberPosition === 2) return 1;
  let last = 1;
  let twoLast = 1;
  let next = 2;
  for (let i = 3; i < numberPosition; i++) {
    twoLast = last;
    last = next;
    next = last + twoLast;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;
