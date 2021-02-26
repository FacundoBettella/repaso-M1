const { Node, LinkedList, BinarySearchTree } = require("./DS.js");

const arr = [
  {
    nombre: "teclado",
    precio: 8,
    id: 3,
  },
  {
    nombre: "zapatilla",
    precio: 6,
    id: 2,
  },
  {
    nombre: "camisa",
    precio: 1,
    id: 0,
  },
  {
    nombre: "remera",
    precio: 5,
    id: 1,
  },
  {
    nombre: "remera",
    precio: 5,
    id: 1,
  },
];

function sort(arr, key) {
  array = [...arr];
  let size = array.length;
  for (let i = 0; i < size; i++) {
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (typeof array[j][key] === "number") {
        if (array[j][key] < array[min][key]) {
          min = j;
        }
      }
      if (typeof array[j][key] === "string") {
        if (array[j][key].charCodeAt() < array[min][key].charCodeAt()) {
          min = j;
        }
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}

sort(arr, "precio"); // Logrado

const lista = new LinkedList();

for (let i = 0; i < 10; i++) {
  lista.add(i);
}

LinkedList.prototype.size = function () {
  let largo = 0;
  let current = this.head;
  while (current !== null) {
    largo++;
    current = current.next;
  }
  return largo;
};

// 4 --> 3 --> 2 --> 1 --> null

LinkedList.prototype.sort = function () {
  const size = this.size();
  const current = this.head;
  for (let i = 0; i < size; i++) {
    const val = current.next.value;
    if (val > current.value) {
    }
    current = current.next;
  }
};

lista.size();

// const result = [];
//
// for(atraviesa la lista) {
//     pushea los valores en result;
// }
//
// foreach a result que agrega los valores a la linkedlist vacia
