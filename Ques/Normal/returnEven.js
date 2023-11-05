// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const evenOnly = (arr) => {
  const evenOnly = arr.filter((num) => num % 2 === 0);
  return evenOnly;
};

console.log(evenOnly([3, 5, 4, 2, 8, 7]));
