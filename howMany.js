// PROBLEM
// Write a function that counts the number of occurrences
// of each element in a given array. Log the element along
// with the number of occurrences.
//
// EXAMPLES
// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];
// 
// countOccurrences(vehicles);
// 
// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2
//
// DATA STRUCTURE
// Object
//
// ALGORITHM
// - create a new Object to store results of occurrence count
// - iterate over elements in argument array, incrementing count
//   for each occurrence of element
// - return Object
//
// CODE

function countOccurrences(arr) {
  let occurrenceCount = {};
  arr.forEach((elem) => {
    if (!occurrenceCount[elem]) {
      occurrenceCount[elem] = 1; 
    } else {
      occurrenceCount[elem] += 1;
    }
  })

  for (const [elem, count] of Object.entries(occurrenceCount)) {
    console.log(`${elem} => ${count}`);
  }
}

function formatOccurrenceCountOutput(occurrenceObject) {

}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
