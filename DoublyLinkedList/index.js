class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode
    this.length++;

    return this
  }
  pop(){
    if(this.length===0) return undefined
    if(this.length===1){
      this.head=null
      this.tail=null
    }
    let lastNode = this.tail
    this.tail=lastNode.prev
    this.tail.next=null
    lastNode.prev=null
    this.length--
    return lastNode
  }
  shift(){
    if(!this.head) return undefined
    const oldHead = this.head
    if(this.length===1){
      this.head=null
      this.tail=null
    }
     this.head=oldHead.next
     this.head.prev=null
     oldHead.next=null
     this.length--

     return oldHead
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.shift();

console.log(list);
