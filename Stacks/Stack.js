const LinkedList = require('./LinkedList');

class Stack() {
  constructor(maxSize=Infinity) {
    this.stack = new LinkedList;
    this.size = 0;
    this.maxSize = maxSize;
  }

  peek() {
    if (!tihs.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
    } else {
      throw new Error('Stack is full.');
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error('Stack is empty.');
    }
  }
}

module.exports = Stack;
