function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const isOdd = i % 2 !== 0;

    if (isOdd) {
      results.push(arr[i]);
    }
  }

  return results;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  const results = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const isOdd = i % 2 !== 0;

    if (isOdd) {
      results.push(arr[i]);
    }
  }

  return results;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Double the value of i each time through the loop starting at 1
  // Your code here

  const results = [];

  for (let i = 1; i < arr.length; i *= 2) {
    results.push(arr[i]);
  }

  return results;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here

  const results = [];

  for (let i = 1; i < arr.length; i *= n) {
    results.push(arr[i]);
  }

  return results;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const middle = Math.ceil(arr.length / 2);
  return arr.slice(0, middle);
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const middle = Math.ceil(arr.length / 2);
  return arr.slice(middle);
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
