function alternatingLetters(str) {
  const string = [];

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (i % 2 !== 0) {
      string.push(str[i].toUpperCase());
    } else {
      string.push(str[i].toLowerCase());
    }
  }

  return string.join("");
}

function alternatingLetters2(str) {
  return str
    .split("")
    .map((el, idx) => (idx % 2 !== 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
}

console.log(alternatingLetters("this is a test")); //.to.equal("tHiS Is a tEsT");
console.log(alternatingLetters("test")); //.to.equal("tEsT");

console.log(alternatingLetters2("this is a test")); //.to.equal("tHiS Is a tEsT");
console.log(alternatingLetters2("test")); //.to.equal("tEsT");
