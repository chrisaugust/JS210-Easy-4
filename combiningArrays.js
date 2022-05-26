// PROBLEM
// Write a function that takes two arrays as arguments and returns an
// array containing the union of the values from the two arrays. There
// should be no duplicate values, even if there are duplicates in the
// original arrays. Assume that both arguments will always be arrays.
//
// EXAMPLES
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
//
// ALGRORITHM
// union(...arrays)
// - initialize empty unionArray
// - invoke forEach on arrays, passing addNonDuplicateValues
//   in as callback function
// - return unionArray
//
// addNonDuplicateValues(targetArray, sourceArray)
// - invoke forEach on sourceArray
//   - if element if not in targetArray, push it to targetArray
//
//
// CODE
function union(...arrays) {
  let unionArray = [];
  arrays.forEach((arr) => addNonDuplicateValues(unionArray, arr));
  return unionArray;
}

function addNonDuplicateValues(targetArray, array) {
  array.forEach(elem => {
    if (!targetArray.includes(elem)) {
      targetArray.push(elem);
    }
  });
}
// TESTS
console.log(String(union([1, 3, 5], [3, 6, 9])) === String([1, 3, 5, 6, 9]));
console.log(String(union([1, 2], [2, 3, 4, 5])) === String([1, 2, 3, 4, 5]));
