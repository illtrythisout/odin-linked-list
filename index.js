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
    currentNode.next = null;

    this.tail = currentNode;

    this.size--;
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
}
