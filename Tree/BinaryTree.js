class BinaryTree {
  constructor(value, depth=1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth+1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth+1);
      } else {
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value) {
  if (value === this.value) {
    return this;
  } else if (value < this.value && this.left) {
    return this.left.getNodeByValue(value);
  } else if (value > this.value && this.right) {
    return this.right.getNodeByValue(value);
  } else {
    return null;
  }
}

depthFirstTraversal() {
  if (this.left) {
    this.left.depthFirstTraversal();
  }
  console.log(this.value);
  console.log(`depth: ` + this.depth);
  if (this.right) {
    this.right.depthFirstTraversal();
  }
}

};

module.exports = BinaryTree;
