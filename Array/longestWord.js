function longestWord(sentence) {
  const words = sentence.split(" ");
  return words.reduce(
    (max, word) => (word.length > max ? word.length : max),
    0
  );
}

let sent = "Find the Longest Word in a Sentence";

console.log(longestWord(sent));
