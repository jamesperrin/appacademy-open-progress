function productArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(productArray([1, 2, 3, 4, 5]));
console.log(productArray([0, 1, 2, 3, 4, 5]));
console.log(productArray([1, -2, 3, 4, 5]));
