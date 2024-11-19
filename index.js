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
    let currentNode = this.head;
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.size++;
  }

  prepend(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }
}
