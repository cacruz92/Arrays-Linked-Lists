/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    this.tail.next = newNode;
    this.tail = newNode
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    newNode.next = this.head;
    this.head = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head){
      return null;
    
    } else {
    
    let currentNode = this.head;
    let removedItem = this.tail;
    
    if(currentNode === removedItem){
      this.head = null;
      this.tail = null;
      return removedItem;
    }

    while(currentNode.next !== this.tail){
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;

    return removedItem;
    }
  }
  

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head){
      return null;
    } else {
      let removedItem = this. head;
      this.head = this.head.next;

      if(!this.head) {
        this.tail = null;
      }
      return removedItem;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || !this.head){
      return null;
    }
    let currentNode = this.head;
    let currentIdx = 0;

    while (currentNode && currentIdx < idx){
      currentNode = currentNode.next;
      currentIdx ++;
    }
    return currentNode.value;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || !this.head){
      return null;
    }
    let currentNode = this.head;
    let currentIdx = 0;

    while (currentNode && currentIdx < idx){
      currentNode = currentNode.next;
      currentIdx ++;
    }
    currentNode.value = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if(idx === 0){
      return this.unshift(val)
    }
    if(idx === this.length){
      return this.push(val)
    }

    let newNode = new Node(val);
    let prevNode = this.getAt(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
  

      if (idx >= this.length || idx < 0) {
        throw new Error("Invalid index.");
      }
  
      if(idx === 0){
        return this.shift();
      }
      if(idx === this.length-1){
        return this.pop();
      }
  
      let currentNode = this.getAt(idx);
      let prevNode = this.getAt(idx - 1);
      
      prevNode.next = currentNode.next;
    }
  
  

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0){
      return 0;
    }

    let currentNode = this.head
    let currentSum = 0

    while(currentNode){
      currentSum += currentNode.value;
      currentNode = currentNode.next;
    }
    let avg = currentSum/this.length;
    return avg;
  }
}

module.exports = LinkedList;
