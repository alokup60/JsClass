let word = "listen";
let word2 = "silent";

function checkAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(checkAnagram(word, word2)); //true
