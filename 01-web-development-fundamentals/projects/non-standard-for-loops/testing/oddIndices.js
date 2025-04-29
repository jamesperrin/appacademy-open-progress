function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const isOdd = i % 2 !== 0;

    if (isOdd) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(oddIndices([1, 2, 3])); //.to.deep.equal([2]);
console.log(oddIndices([1, 2, 3, 4])); //.to.deep.equal([2, 4]);
