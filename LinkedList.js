import Node from "./Node.js";

export default class LinkedList {
  constructor({ head = null } = {}) {
    this._head = head;
  }

  head() {
    return this._head;
  }

  tail() {
    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  append(value) {
    if (!this.head()) this._head = new Node({ value: value });
    else {
      let current = this.head();
      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = new Node({ value: value });
    }
  }

  prepend(value) {
    this._head = new Node({ value: value, nextNode: this.head() });
  }

  size() {
    let current = this.head();
    let count = this.head() === null ? 0 : 1;
    while ((current = current.nextNode)) {
      count++;
    }

    return count;
  }

  at(index) {
    let current = this.head();
    let count = 0;
    while (count < index) {
      if (!(current = current.nextNode)) throw new Error("index out of range");
      count++;
    }

    return current;
  }

  pop() {
    this.at(this.size() - 2).nextNode = null;
  }

  contains(value) {
    function aux(current) {
      if (current.value === value) {
        return true;
      } else {
        return current.nextNode ? aux(current.nextNode) : false;
      }
    }

    return aux(this.head());
  }

  find(value) {
    function aux(current, index = 0) {
      if (current.value === value) {
        return index;
      } else {
        return current.nextNode ? aux(current.nextNode, ++index) : null;
      }
    }

    return aux(this.head());
  }

  toString() {
    function aux(current) {
      if (current === null) {
        return "null";
      } else {
        return `( ${current.value.toString()} ) -> ${aux(current.nextNode)}`;
      }
    }

    return aux(this.head());
  }

  insertAt(value, index) {
    this.at(index - 1).nextNode = new Node({
      value: value,
      nextNode: this.at(index),
    });
  }

  removeAt(index) {
    this.at(index - 1).nextNode = this.at(index).nextNode;
  }
}
