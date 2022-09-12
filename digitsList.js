// PROBLEM
// Write a function that takes one argument, a positive integer,
// and returns a list of the digits in that integer.
//
// EXAMPLES
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]
//
// DATA STRUCTURE
// Integer -> Array
//
// ALGORITHM
// - coerce argument from number to a string
// - split the string into an array of characters
// - use #map to coerce string characters into numbers
// - return the array of numbers produced by previous step 
//
// CODE

function digitList(num) {
  let strNum = String(num);
  let chars = strNum.split('');
  return chars.map((strChar) => parseInt(strChar));
}

// TESTS
console.log(String(digitList(12345)) === String([1, 2, 3, 4, 5]));
console.log(String(digitList(7)) === String([7]));
console.log(String(digitList(375290)) === String([3, 7, 5, 2, 9, 0]));
console.log(String(digitList(444)) === String([4, 4, 4]));
