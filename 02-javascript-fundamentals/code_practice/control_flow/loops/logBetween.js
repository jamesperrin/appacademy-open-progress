/**

Instructions:

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Hint: this function only needs to print using console.log it does not need to return.

Initial code:


*/

function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

// Examples:
console.log('\nlogBetween(-1, 2');
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

console.log('\nlogBetween(14, 6)');
logBetween(14, 6); // => prints nothing

console.log('\nlogBetween(4, 6)');
logBetween(4, 6); // prints out:
// 4
// 5
// 6
