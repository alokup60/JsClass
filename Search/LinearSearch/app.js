// Time-complexity -> 0(n)
//Space-complexity -> 0(1)
const linearSearch = (arr, target) => {
  for (let i of arr) {
    if (target === i) {
      return i;
    }
  }
  return -1;
};

//Global linear search -> multiple value -> const arr = [5, 2, 2, 9, 4, 1, 6, 3];
// Time-complexity -> 0(n)
//Space-complexity -> 0(n)
const globalLinear = (arr, target) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      res.push(i);
    }
  }
  if (res.length === 0) return -1;
  return res;
};

//using find method
const findLinearSearch = (arr, target) => {
  const foundElem = arr.find((elem) => elem === target);
  if (foundElem) {
    return arr.indexOf(foundElem);
  }
  return -1;
};

const arr = [5, 2, 9, 2, 1, 6, 3];
console.log(`using find linear search: -> ${findLinearSearch(arr, 6)}`);
console.log(`using find linear search: -> ${findLinearSearch(arr, 0)}`);
console.log(`linear search: -> ${linearSearch(arr, 1)}`);
console.log(`global linear search: -> ${globalLinear(arr, 2)}`);

//interview Question
//1.    find the kth missing value from an array
// arr = [2,3,4,5,7,8] ,k = 2
//count = 4
// 7 <= 2 + 4
const findKthPositive = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
};

const arr2 = [2, 3, 4, 5, 7, 8];
console.log("second missing number is: ", findKthPositive(arr2, 2));
