//Binary Search is a searching technique which works on the Divide and Conquer approach. It is used to search for any element in a sorted array.
//array must be in ascending/descending order

// T.C -> 0(logN)
//S.C -> 0(1)

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(binarySearch(arr, 7));

//Rule
//1-> arr must be in sorted
//2-> take three var as - start,end,middle->start+end/2
//3-> if arr[middle] < target -> start = middle +1
