// PROBLEM
// Write a function that takes two array arguments each containing
// a list of numbers, and returns a new array containing the
// products of each pair of numbers with the same index from the
// argument arrays. Assume that the arguments contain the same
// number of elements.
//
// EXAMPLES
// multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
//
// DATA STRUCTURE
// Array, Array -> Array
//
// ALGORITHM
// - use map to transform the elements of the two argument arrays into
//   an array of product values
//
// CODE

function multiplyList(arr1, arr2) {
  return arr1.map((elem, idx) => elem * arr2[idx]);
}

// TESTS
console.log(String(multiplyList([3, 5, 7], [9, 10, 11])) === String([27, 50, 77]));
