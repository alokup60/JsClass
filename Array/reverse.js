//1-> reverse number
console.log("--------------------");
console.log("number reverse");
const num = 1234567;
//1-> convert into String
//2-> split
//3-> reverse
//4-> join
//5-> convert into num

const b = +num.toString().split("").reverse().join("");
console.log(b);
console.log(typeof b);

//2->character reverse
console.log("--------------------");
console.log("character reverse");
const str = "alok Raj";
const newStr = str.split("").reverse().join("");
console.log(newStr);

//3-> word reverse
console.log("--------------------");
console.log(" word reverse");
const str2 = "alok Raj singh";
const newStr2 = str2.split(" ").reverse().join(" ");
console.log(newStr2);

//without using in-built function reverse the string
console.log(
  "----------------without using in-built function reverse the string----------------------"
);
const str3 = "Alok";
const reverseStr = (str) => {
  let newStr3 = "";
  for (let i = str3.length - 1; i >= 0; i--) {
    newStr3 += str3[i];
  }
  return newStr3;
};
console.log(reverseStr(str3));
