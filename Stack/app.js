class Stack {
  constructor() {
    this.stack = [];
  }

  push(elem) {
    return this.stack.push(elem);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
  print() {
    return this.stack.toString();
  }
}

const list = new Stack();
console.log(list.isEmpty());
list.push(10);
console.log(list.isEmpty());
console.log(list.size());

list.push(20);
list.push(30);
list.push(9);
console.log(list.print());

list.pop();
console.log(list.peek());
console.log(list.print());
