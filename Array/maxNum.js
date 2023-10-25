const arr = [2, 3, 4, 12, 8, 5, 6];

function maxNum(arr) {
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
console.log("using for of loop");
console.log(maxNum(arr));

function maxNum2(arr) {
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

console.log("using reduce method");
console.log(maxNum2(arr));
