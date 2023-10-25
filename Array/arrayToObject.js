//using reducer
const arr = [10, 20, 30];

console.log("using reducer");
function arrayToObject(arr) {
  return arr.reduce((obj, item, index) => {
    obj[index] = item;
    return obj;
  }, {});
}

console.log(arrayToObject(arr));

console.log("using Object.assign()");
function arrayToObject2(arr) {
  return Object.assign({}, arr);
}
console.log(arrayToObject2(arr));
