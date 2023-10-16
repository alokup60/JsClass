class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(4);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head); //ListNode { data: 4, next: ListNode { data: 5, next: null } }
console.log(list.head.data); //4
console.log(list.head.next); //ListNode { data: 5, next: null }
console.log(list.head.next.data); //5
