// Creamos la clase Binary Search Tree
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Creamos el metodo insert
  insert(value) {
    // Si el arbol esta vacio lo inicializa
    if (!this.value) return (this.value = value);

    (function add(value, current) {
      // Si el valor es mayor que el valor actual
      if (current.value < value) {
        current.right
          ? add(value, current.right)
          : (current.right = new BinarySearchTree(value));
        return;
      }
      // Si el valor es menor o igual
      current.left
        ? add(value, current.left)
        : (current.left = new BinarySearchTree(value));
    })(value, this);
    // IIFE
  }
}

// Creamos la clase LinkedList
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) return (this.head = newNode);

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = newNode;
  }

  remove() {
    if (!this.head) return null;
    if (!this.head.next) {
      const aux = this.head;
      this.head = null;
      return aux;
    }

    let tail = this.head.next;
    let prev = this.head;
    while (tail.next) {
      prev = tail;
      tail = tail.next;
    }
    prev.next = null;
    return tail.value;
  }
}

// Creamos la clase Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  BinarySearchTree,
  LinkedList,
  Node,
};
