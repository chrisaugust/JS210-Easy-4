// PROBLEM
// Write a function that takes a floating point number representing an
// angle between 0 and 360 degrees and returns a string representing
// that angle in degrees, minutes, and seconds. Degrees should be indicated
// with the degeree symbol (˚), minutes with a single quote ('), and seconds
// with a double quote ("). There are 60 minutes in a degree and 60 seconds
// in a minute.
//
// EXAMPLES
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
//
// ALGORITHM
// - assign degrees to Math.floor(argument)
// - assign totalRemainingSeconds to
//   (argument - degrees) * (DEGREES_PER_MINUTE * SECONDS_PER_MINUTE)
// - assign minutes to Math.floor(totalRemainingSeconds / SECONDS_PER_MINUTE);
// - assign seconds to totalRemainingSeconds % SECONDS_PER_MINUTE
// - return string literal
//
// CODE
'use strict';

function dms(degreesFloat) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

  const degrees = Math.floor(degreesFloat);
  let remainingSeconds = (degreesFloat - degrees) * SECONDS_PER_DEGREE;
  const minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  const seconds = Math.floor(remainingSeconds % SECONDS_PER_MINUTE);

  return `${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`;

}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

// TESTS
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"");
//console.log(dms(360) === "0°00'00\");
