// PROBLEM
// Write a function that takes one argument, an array of integer
// elements, and returns the average of all the integers in the
// array, rounded down to a whole number. Assume that the argument
// array will never be empty and that the elements will always
// be positive integers.
//
// EXAMPLES
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - reduce elements of array through addition
// - divide sum by number of elements
// - round down to whole number and return
//
// CODE

function average(numArray) {
  let sum = numArray.reduce((total, int) => total += int, 0);
  let avg = sum / numArray.length;
  return Math.floor(avg);
}

// TESTS
console.log(average([1, 5, 87, 45, 8, 8]) === 25);
console.log(average([9, 47, 23, 95, 16, 52]) === 40);
