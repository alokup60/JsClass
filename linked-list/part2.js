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

  //O(1) -> constant
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

  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("something went wrong");
    }
    if (index === 0) {
      // const node = new Node(value);
      // if (this.isEmpty()) {
      //   node = this.head;
      // } else {
      //   node.next = this.head;
      //   this.head = node;
      // }
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev;
      prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
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
list.append(30);
list.append(40);
console.log("printing before insertion: ");
list.print();

console.log("printing after insertion: ");
list.insert(15, 2);

console.log("printing with only single value: ");
list.insert(11);
list.print();
console.log(list.getSize());

console.log(list.removeFrom(10)); // if index is out of range

list.removeFrom(0); //remove when index is 0
list.print();
console.log(list.getSize());

list.removeFrom(3); //remove from any position
list.print();
