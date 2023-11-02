// 1. Write a JavaScript function to calculate the sum of two numbers.

const SumTwo = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(SumTwo(3, 5)); //8
console.log(SumTwo(4, 8, 9)); //21

//2nd way
const sum = (...args) => {
  let total = args.reduce((acc, curr) => acc + curr);
  return total;
};

console.log(sum(4, 6, 6, 8)); //24
