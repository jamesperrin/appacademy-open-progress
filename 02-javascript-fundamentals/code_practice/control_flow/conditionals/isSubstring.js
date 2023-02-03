/**

Instructions:

Now lets give you a little challenge with the String.indexOf() method.

Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.

If any of this is too confusing, know that's normal. We'll dig into String.indexOf() more further in the curriculum. Give yourself 30-60 minutes to Google and see if you can discover the answer.

Initial code:

function isSubstring(searchString, subString) {
  // your code here...
}

*/

function isSubstring(searchString, subString) {
  return searchString.toLowerCase().indexOf(subString.toLowerCase()) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
