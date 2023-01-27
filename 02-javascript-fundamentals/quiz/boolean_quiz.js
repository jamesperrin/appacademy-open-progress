// What will the code above print out?
console.log(!true); // true
console.log(!!false); // false
console.log(false && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
onsole.log(true || true); // true
console.log(!false || (false && true)); // true
console.log(!(false || true) && true); // false

/**
 If A and B are any boolean values, the expression above is equivalent to which of the following?
  !(A || B)
  Answer: !A && !B
 */

  /**
If A and B are any boolean values, the expression above is equivalent to which of the following?
  !(A && B)
  Answer: !A || !B
 */
