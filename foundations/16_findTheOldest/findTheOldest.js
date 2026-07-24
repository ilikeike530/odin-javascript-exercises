const findTheOldest = function(peopleArray) {
  peopleArray.sort( (a, b) => {
    // if (a.yearOfDeath === undefined || a.yearOfBirth === undefined) return 1;
    // if (b.yearOfDeath === undefined || b.yearOfBirth === undefined) return -1;
    let currentYear = new Date().getFullYear();
    return ((b.yearOfDeath || currentYear) - b.yearOfBirth) - ((a.yearOfDeath || currentYear) - a.yearOfBirth);
  });
  return peopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
