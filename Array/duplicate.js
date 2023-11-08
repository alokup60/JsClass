const arr = [2, 3, 4, 2, 5, 6, 3, 4];

// const findOccurances = (arr) => {
//   let duplicateArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; i++) {
//       if (arr[i] === arr[j]) {
//         duplicateArr.push(arr[i]);
//       }
//     }
//   }
//   return [...new Set(duplicateArr)];
// };

// console.log(findOccurances(arr));

console.log("------------------using filter----------------------");
const findDuplicate = (arr) => {
  const duplicateArr = arr.filter((item, index) => arr.indexOf(item) !== index);
  return Array.from(new Set(duplicateArr));
};
console.log("Find Duplicate -> ", findDuplicate(arr));

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
console.log("Remove Duplicate without Sets:-", removeDuplicate(arr2));

//4-> remove duplicate elements from an array using Sets
console.log("----------------------");
console.log("Remove duplicate using Sets");
const arr3 = [10, 20, 30, 10, 20, 11];
const originalArr = Array.from(new Set(arr3)); //in Object
// const arrForm = [...originalArr]; //convert in array
console.log("Remove Duplicate using Sets:-", originalArr);
