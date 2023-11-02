// Debouncing is a technique of delaying the execution of a function call
//-> suitable for scrolling,search box

const inputBox = document.getElementById("searchBox");
const output = document.getElementById("output");
const debounce = (mainFn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFn(...args);
    }, delay);
  };
};

const searchData = (e) => {
  output.innerHTML = e.target.value;
  console.log(e.target.value);
  console.log("Search completed");
};

const debounceFn = debounce(searchData, 3000);
// console.log(debounceFn);
inputBox.addEventListener("input", debounceFn);

//-----------------------without using debounce------------
const searchBox = document.getElementById("searchBoxs");
const op = document.getElementById("op");

const searching = (e) => {
  op.innerHTML = e.target.value;
  console.log(e.target.value);
  console.log("search completed");
};

searchBox.addEventListener("input", searching);
