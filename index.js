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
}

// let li = new LinkedList();
// li.append(1);
// li.append(2);
// li.append(3);
// console.log(li);
