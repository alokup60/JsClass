const arr = [10, 20, 30, 60];

// Time-complexity -> 0(n)
//Space-complexity -> 0(1)
const linearSearch = (arr, target) => {
  for (let i of arr) {
    if (i === target) {
      return i;
    }
  }
  return -1;
};
console.log(linearSearch(arr, 90));

// T.C -> 0(logN)
//S.C -> 0(1)
//1-> start,end,middle
//2-> condition target,smallor greater
const binaySerach = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return target;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binaySerach(arr, 30));
