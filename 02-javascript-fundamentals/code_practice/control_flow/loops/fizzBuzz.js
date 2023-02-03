/**

Instructions:

Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

Initial code:


*/

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    let isDivisibleBy3 = i % 3 === 0;
    let isDivisibleBy5 = i % 5 === 0;

    if (isDivisibleBy3 && !isDivisibleBy5) {
      console.log(`${i}`);
    } else if (isDivisibleBy5 && !isDivisibleBy3) {
      console.log(`${i}`);
    }
  }
}

function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzzNested(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        console.log(i);
      }
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}

// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18
