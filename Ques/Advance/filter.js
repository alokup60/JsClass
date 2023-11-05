// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
const sortByKey = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};
const arrayOfObjects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sortedArray = sortByKey(arrayOfObjects, "age");
console.log(sortedArray);
