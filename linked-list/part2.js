class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //initialize head pos.
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value); //1-> add value by creating object of Node
    if (this.isEmpty()) {
      this.head = node; //2-> set head pos.
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty.");
    } else {
      let curr = this.head;
      let listVal = "";
      while (curr) {
        listVal += `${curr.value} `;
        curr = curr.next;
      }
      console.log("printing all nodes: ", listVal);
    }
  }
}

const list = new LinkedList();

console.log("is Empty: ", list.isEmpty());
console.log("size is: ", list.getSize());
console.log("Adding first node: ");
list.print();
list.prepend(5);
list.print();
list.prepend(10);
list.prepend(20);
list.print();
