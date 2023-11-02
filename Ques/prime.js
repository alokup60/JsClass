// Write a JavaScript function to check if a given number is prime.

const checkPrime = (num) => {
  let isPrime = true;
  if (num === 1) {
    console.log("Not a prime nor a Composite");
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${num} is Prime`);
    } else {
      console.log(`${num} is not Prime`);
    }
  } else {
    console.log("Number is not prime");
  }
};
const isPrime = (arr) => {
  const primeNums = arr.filter((num) => {
    return checkPrime(num);
  });
  return primeNums;
};

console.log(isPrime([2, 3, 4, 5, 6, 7]));
