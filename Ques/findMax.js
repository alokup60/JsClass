// 2. Write a JavaScript program to find the maximum number in an array.
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const arr = [3, 6, 14, 2, 8, 4, 12];
console.log(findMax(arr));

//2nd way
const max = (arr) => {
  return Math.max(...arr);
};

console.log(max(arr));
