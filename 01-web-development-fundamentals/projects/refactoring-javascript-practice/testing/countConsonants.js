function countConsonants(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("nospaces")); //.to.equal(5);
console.log(countConsonants("yes spaces")); //.to.equal(6);
