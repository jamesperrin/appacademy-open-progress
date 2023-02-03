/**

Instructions:

Write a method averageOfTwo(num1, num2) that returns the average of two numbers.

Initial code:

function averageOfTwo(num1, num2) {
  // your code here...
}

*/

function averageOfTwo(num1, num2) {
  let sum = num1 + num2;
  let average = sum / 2;
  
  return average;
}

console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75
