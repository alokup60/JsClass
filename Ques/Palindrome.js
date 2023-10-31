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
