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
