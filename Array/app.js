//1.    Find the maximum number from an array
console.log("1.    Find the maximum number from an array");
const findMax = (arr) => {
  let max_arr = arr[0];
  for (let i of arr) {
    if (i > max_arr) {
      max_arr = i;
    }
  }
  return max_arr;
};

let arr = [6, 9, 2, 7, 8];
console.log(findMax(arr));

console.log("--------------Next Question---------");
console.log("2.    Find the second maximum number from an array");
//2.    Find the second maximum number from an array
const findSecMax = (arr) => {
  let max = arr[0];
  let secMax = -Infinity;
  for (let i of arr) {
    if (i > max) {
      secMax = max;
      max = i;
    } else if (i < max && i > secMax) {
      secMax = i;
    }
  }

  //   console.log("Second maximum valus is: ", secMax);
  return secMax;
};

console.log(findSecMax(arr));

//3-> remove duplicate elements from an array
console.log("----------------------");
console.log("Remove duplicate without using Sets");
const removeDuplicate = (arr) => {
  const newArr = arr.filter((elem, index) => {
    return arr.indexOf(elem) === index;
  });
  return newArr;
};
const arr2 = [1, 2, 3, 4, 2, 3, "am", 5, 6, "am"];
console.log(removeDuplicate(arr2));
