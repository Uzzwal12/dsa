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
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if (this.head === null) return undefined;

    let firstItem = this.head;
    this.head = firstItem.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return firstItem;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let i = 0;
    let current = this.head;
    while (i !== index) {
      i++;
      current = current.next;
    }

    return current;
  }
  set(index, val) {
    const newNode = this.get(index);
    if (newNode) {
      newNode.val = val;
      return true;
    }

    return false;
  }
  traverse() {
    var current = this.head;
    while (current) {
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
console.log(list.get(1));
