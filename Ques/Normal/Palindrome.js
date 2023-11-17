const checkPalindrome = (value) => {
  if (typeof value === "number" || typeof value === "string") {
    const numStr = value.toString();
    const reverseStr = numStr.split("").reverse().join("");

    if (numStr === reverseStr) {
      console.log("Palindrome");
    } else {
      console.log("Not a Palindrome");
    }
  } else {
    console.log("Invalid Input");
  }
};

checkPalindrome("alok");

//using Two-Pointers
const isPalindrome = (value) => {
  if (typeof value === "number" || typeof value === "string") {
    const str = value.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  } else {
    console.log("Invalid input type, Please provide number or String");
    return fasle;
  }
};

console.log(isPalindrome("RaR"));
