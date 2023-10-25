const arr = [2, 3, 4, 12, 8, 5, 6];
// const arr2 = [2];

const secMax = (arr) => {
  //descending order
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};

const secMaxNum = secMax(arr);
console.log("using sorting method");
console.log("Second maximum num is: ", secMaxNum);

const findSecMax = (arr) => {
  let firstMax = -Infinity;
  let secMax = -Infinity;

  for (let num of arr) {
    if (num > firstMax) {
      secMax = firstMax;
      firstMax = num;
    } else if (num > secMax && num < firstMax) {
      secMax = num;
    }
  }

  if (secMax === -Infinity) {
    return "There is no second maximum in the array";
  }
  return secMax;
};

console.log("without using sorted method");
const secondMax = findSecMax(arr);
console.log("second max is: ", secondMax);
