function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    // const isPowerOf2 = !(i & (i - 1)) && i;
     // Compute log base 2 of n using a quotient of natural logs
    const log_n = Math.log(i)/Math.log(2);

    // Round off any decimal component
    const log_n_floor = Math.floor(log_n);

    // If log_n is a whole number
    if (log_n - log_n_floor === 0) {
        results.push(arr[i]);
    }
  }

  return results;
}

function secondPower2(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here

  const result = [];
  for (let i = 1; i < arr.length; i *= 2) {
    result.push(arr[i]);
  }
  return result;
}

                       //0, 1, 2, 3, 4, 5, 6, 7
console.log(secondPower([1, 2, 3, 4, 5, 6, 7, 8])); //.to.deep.equal([2, 3, 5]);
console.log(secondPower2([1, 2, 3, 4, 5, 6, 7, 8])); //.to.deep.equal([2, 3, 5]);
