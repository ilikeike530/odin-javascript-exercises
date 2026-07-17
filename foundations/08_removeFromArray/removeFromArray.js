// function removeFromArray(array, ...valuesToRemove) {
//   valuesToRemove.forEach( valueToRemove => {
//     while (array.includes(valueToRemove)) {
//       array.splice(array.indexOf(valueToRemove), 1);
//     }
//   })
//   return array;
// }

function removeFromArray(array, ...valuesToRemove) {
  return array.filter( item => !valuesToRemove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
