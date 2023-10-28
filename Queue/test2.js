//optimize way using Object
//0(1) -> T.C
class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(elem) {
    this.queue[this.rear] = elem;
    this.rear++;
  }
  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.queue);
  }
}

const list = new Queue();
console.log(list.isEmpty());

list.enqueue(10);
list.enqueue(20);
list.enqueue(30);
console.log(list.isEmpty());
console.log(list.size());
list.print();
console.log("peek", list.peek());

list.dequeue();
list.print();
console.log("peek", list.peek());
