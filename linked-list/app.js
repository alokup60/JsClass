//1-> create empty node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//2-> initialize head pos.
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    let node = this.head;
    return node;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  clear() {
    return (this.head = null);
  }
}

//3-> create object for node || add node
let node1 = new Node(4);
let node2 = new Node(5);
node1.next = node2;

//4-> create object for head
let list = new LinkedList(node1);

console.log("size of linked list is: ", list.size());
console.log("first node is: ", list.getFirst());
console.log(list.head.next.data); //5
console.log("last node is: ", list.getLast());
console.log(list.clear());
// console.log(list.head); //Node { data: 4, next: Node { data: 5, next: null } }
// console.log(list.head.data); //4
// console.log(list.head.next); //Node { data: 5, next: null }
// console.log(list.head.next.data); //5

//some methods:
//1-> size()
//2-> clear()
//3-> getLast()
//4-> getFirst()
