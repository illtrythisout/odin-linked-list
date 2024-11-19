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
    let currentNode = this.head;

    // sets currentNode to the second to last node in the linked list
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;

    this.tail = currentNode;

    this.size--;
  }
}
