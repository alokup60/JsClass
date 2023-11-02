//find the second max number
const secMax = (arr) => {
  let max = arr[0];
  let secMax = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] !== max) {
      secMax = arr[i];
    }
  }
  return secMax;
};

const arr = [2, 8, 7, 6, 3, 9, 5];
console.log(secMax(arr));

//another way
const secondMax = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a); //descending order
  return sortedArr[1];
};

console.log(secondMax(arr));
