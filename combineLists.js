// PROBLEM
// Write a function that combines two arrays passed in as arguments,
// returning a new array that contains all elements from both array
// arguments, with each element taken alternately from the argument
// arrays. Assume that both argument arrays aren't empty, and that they
// contain the same number of elements.
//
// EXAMPLE
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - call flatMap on firstArray
//   - callback pushes currentElement and secondArray[currentIndex] to returnArray
// - return the result of the above method call
// CODE
'use strict';

function interleave(arr1, arr2) {
  return arr1.flatMap((element, index) => [element, arr2[index]]);
}

// TESTS
console.log(String(interleave([1, 2, 3], ['a', 'b', 'c'])) === 
String([1, "a", 2, "b", 3, "c"]));
