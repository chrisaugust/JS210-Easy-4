// PROBLEM
// Write a function that takes an array of integers as input,
// multiplies the integers together, divides the result by the
// number of integers in the input array, and returns the result
// as a string with the value rounded to three decimal places.
//
// EXAMPLES
// showMultiplicativeAverage([3, 5]);                   // "7.500"
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
//
// DATA STRUCTURES/TYPE SIGNATURE
// Array -> String
//
// ALGORITHM
// - check that all elements of input array are integers
// - divide result of previous operation by number of elements
// - return result of previous operation as a formatted string 
//
// CODE

function showMultiplicativeAverage(arr) {
  const product = arr.reduce(multiplyAll, 1);
  const multiplicativeAvg = product / arr.length;
  return multiplicativeAvg.toFixed(3);
}

function multiplyAll(total, num) {
  return total * num;
}

function formatResult(int) {
  return int.toFixed(3);
}

// TESTS
console.log(showMultiplicativeAverage([3, 5]) === "7.500")
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667")
