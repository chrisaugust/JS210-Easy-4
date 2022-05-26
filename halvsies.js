// PROBLEM
// Write a function that takes an array as argument and returns
// and array that contains two elements, each of which is an array
// containing the half of the elements of the argument array. If the
// argument array contains an odd number of elements place the middle
// element in the first array.
//
// EXAMPLES
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]
//
// ALGORITHM
// halvsies(array) -> returnArray
// - determine length of array (and if array has odd number of elems)
// - find index of middle element
// - initialize empty returnArray
// - returnArray.push a slice of argument array from 0 to middle index
// - returnArray.push a slice of argument array from middle index + 1
//   to array.length - 1
// - return returnArray
//
// findMiddleElement(array) -> middleIndex
// - if array.length is odd
//   - middleIndex is Math.floor(array.length / 2)
// - if even
//   - middleIndex is (array.length / 2) - 1
// CODE
'use strict';
function determineMiddleIndex(array) {
  if (array.length % 2 === 0) return ((array.length / 2) - 1);
  return Math.floor(array.length / 2);
}

function halvsies(array) {
  // adding 1 to middleIndex to account for how slice works
  const middleIndex = determineMiddleIndex(array) + 1;
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  return [firstHalf, secondHalf];
}
// TESTS
console.log(String(halvsies([1, 2, 3, 4])) === String([[1, 2], [3, 4]]));
console.log(String(halvsies([1, 5, 2, 4, 3])) === String([[1, 5, 2], [4, 3]]));
console.log(String(halvsies([5])) === String([[5], []]));
console.log(String(halvsies([])) === String([[], []]));
