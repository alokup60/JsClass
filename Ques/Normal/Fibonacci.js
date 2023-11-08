const fibonacci = (num) => {
  let n1 = 0,
    n2 = 1,
    nextTerm = 0;

  for (let i = 1; i <= num; ++i) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

fibonacci(10);

// console.log("----------uisng recursion----------");
// const fibonacciRecu = (n) => {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fibonacciRecu(n - 1) + fibonacciRecu(n - 2);
//   }
// };
// console.log(fibonacciRecu(5));

console.log("-----------decreasing order using recursion------------");
const rec = (n) => {
  const decrease = (n) => {
    if (n < 0) {
      return -1;
    } else if (n === 0) {
      return 0;
    } else {
      console.log(n);
      decrease(n - 1);
    }
  };
  return decrease(n);
};

rec(5);
