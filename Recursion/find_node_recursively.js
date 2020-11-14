
class LinkedListRecursion {

// This method will return the correct node when found, or null otherwise.
  findNodeRecursively(data, currentNode=this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }
}
