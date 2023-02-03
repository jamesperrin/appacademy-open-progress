/**

Instructions:

Write a function yell that takes in a string and returns a "yelled" version of that string.

HINT: try using the .toUpperCase() function on a string to see what it does!

Initial code:

function yell(str) {
  // your code here...
}

*/

function yell(str) {
  return `"${str.toUpperCase()}!!!"`;
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"
