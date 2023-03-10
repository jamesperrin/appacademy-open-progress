/**

Instructions:

Write a function doubler(numbers) that takes an array of numbers and returns a new array where every element of the original array is multiplied by 2.

Initial code:

function doubler(numbers) {
    // your code here...
}

*/

function doubler(numbers) {
  const doubledNums = [];

  for (let i = 0; i < numbers.length; i++) {
    const doubled = numbers[i] * 2;
    doubledNums.push(doubled);
  }

  return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
