class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      (this.head = newNode), (this.tail = this.head);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.head === null) return undefined;
    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.traverse()
