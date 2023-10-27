//FIFO -> First in first out
class Queue {
  constructor() {
    this.queue = [];
  }

  push(elem) {
    return this.queue.push(elem);
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  remove() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  print() {
    return this.queue.toString();
  }
}

const list = new Queue();
list.push(10);
list.push(20);
list.push(30);
console.log(list.print());
console.log(list.isEmpty());

list.remove();
console.log(list.print());
console.log(list.peek());
