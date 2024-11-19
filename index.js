class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    let currentNode = this.head;

    // if the linked list is empty, set its first element to the created node
    if (!this.head) {
      this.head = node;
    } else {
      // sets currentNode to the last node in the linked list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.tail = node;

    this.size++;

    return value;
  }

  prepend(value) {
    const node = new Node(value);

    // if the linked list is empty, set its first element to the created node
    if (!this.head) {
      this.head = node;
    } else {
      // sets the node's next value to contain the whole linked list, then replaces the linked list with the current node
      node.next = this.head;
      this.head = node;
    }

    this.size++;

    return value;
  }

  at(index) {
    let currentNode = this.head;

    // loops to the node at index and returns it
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    // checks list length
    if (this.size === 0) {
      return;
    }

    let currentNode = this.head;

    // sets currentNode to the second to last node in the linked list
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    // saves value of node to be removed for return
    let returnValue = currentNode.next.value;

    currentNode.next = null;

    this.tail = currentNode;

    this.size--;

    return returnValue;
  }

  contains(value) {
    let currentNode = this.head;

    // checks if head is value
    if (currentNode.value === value) {
      return true;
    }

    // loops through the rest of the list
    do {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return true;
      }
    } while (currentNode.next);

    // if no values are true, return false
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    // checks if head is value
    if (currentNode.value === value) {
      return currentIndex;
    }

    // loops through the rest of the list
    do {
      currentNode = currentNode.next;
      currentIndex++;
      if (currentNode.value === value) {
        return currentIndex;
      }
    } while (currentNode.next);

    // if no values are found, return null
    return null;
  }

  toString() {
    // checks list length
    if (this.size === 0) {
      return;
    }

    let currentNode = this.head;
    let string;

    // adds head to string
    string = `( ${this.head.value} )`;

    // loops through the rest of the list
    do {
      currentNode = currentNode.next;
      string += ` -> ( ${currentNode.value} )`;
    } while (currentNode.next);

    string += ' -> null';

    return string;
  }

  insertAt(value, index) {
    const node = new Node(value);

    let currentNode = this.head;

    // checks if this.head needs to be updated
    if (index === 0) {
      this.head = node;
    }
    // loops to the node before the index
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    // inserts node right after the node before the index
    node.next = currentNode.next;
    currentNode.next = node;

    // checks if this.tail needs to be updated
    if (index === this.size) {
      this.tail = node;
    }

    this.size++;

    return value;
  }

  removeAt(index) {
    let currentNode = this.head;
    let returnValue;

    // saves value of node to be removed for return
    if (index === 0) {
      returnValue = this.head.value;
    }

    if (index === 0) {
      // checks if this.head needs to be updated
      this.head = currentNode.next;
    }
    // loops to the node before the index
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    // saves value of node to be removed for return
    if (index !== 0) {
      returnValue = currentNode.next.value;
    }

    // removes node right after the node before the index
    currentNode.next = currentNode.next.next;

    // checks if this.tail needs to be updated
    if (index === this.size - 1) {
      this.tail = currentNode;
    }

    this.size--;

    return returnValue;
  }
}
