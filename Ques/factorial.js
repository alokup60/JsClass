// Write a JavaScript program to calculate the factorial of a given number.
const findFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    console.log(`${i} * ${fact} = ${fact * i}`);
    fact *= i;
  }
  return fact;
};

console.log(findFactorial(5));
