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

console.log("----------uisng recursion----------");
const fibonacciRecu = (n) => {
  const fibonacci = (n) => {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      console.log(n - 1, n - 2);
      fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
  return fibonacci(n);
};
fibonacciRecu(5);

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

console.log("--------------Increasing Order--------------");
const recIn = (n) => {
  const increase = (n) => {
    if (n < 0) {
      return -1;
    } else if (n === 0) {
      return 0;
    } else {
      console.log(n);
      increase(n - 1);
      console.log(n);
    }
  };
  return increase(n);
};

recIn(5);
