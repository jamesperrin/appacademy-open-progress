/**

Instructions:

Write a function hello that takes in a string and prints out "Hello, " followed by the string.

HINT: this function doesn't need to return anything, it should just print using console.log.

Initial code:

function hello(str) {
  // your code here...
}

*/

function hello(str) {
  let msg = `Hello, ${str}`;
  return console.log(msg);
}

hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting"
