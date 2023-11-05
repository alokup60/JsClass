//reverse String
const reverseStr = (str) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};

console.log(reverseStr("Alok"));

//reverse only words in a sentence
const reverseWord = (sentence) => {
  const reverse = sentence.split(" ").reverse().join(" ");
  return reverse;
};

console.log(reverseWord("Hello World"));
