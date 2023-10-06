//description - write a function that takes in a specific node of a linked list and deletes that node
//params = {listNode} node
//return = {void}

//delete Node function
// function deleteNode(node) {
//   node.val = node.next.val
//   node.next = node.next.next
// }


//test case
class Node {
    constructor(val) {
      this.val = val;
      this.next = null; // Reference to the next node
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // Reference to the first node in the list
      this.tail = null; // Reference to the last node in the list
    }
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.val);
        current = current.next;
      }
      return result;
    }
    deleteNode(nodeToDelete) {
      if (!nodeToDelete || !nodeToDelete.next) {
        // Unable to delete the node if it's null or the last node
        return;
      }
      nodeToDelete.val = nodeToDelete.next.val;
      nodeToDelete.next = nodeToDelete.next.next;
    }
  }
  
  const linkedList = new LinkedList();
  
  // Append nodes to the linked list
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  
  // Print the initial linked list
  console.log("Initial Linked List:");
  console.log(linkedList.toArray()); // Output: [1, 2, 3, 4, 5]
  
  // Delete a specific node (e.g., the node with value 3)
  const nodeToDelete = linkedList.head.next.next; // Node with value 3
  linkedList.deleteNode(nodeToDelete);
  
  // Print the modified linked list after deletion
  console.log("Linked List After Deletion:");
  console.log(linkedList.toArray()); // Output: [1, 2, 4, 5]
  