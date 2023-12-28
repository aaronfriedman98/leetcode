//description - There is singly-linked list (head) and we need a method that when given a specific node (based on location of linkedList.head.next..etc..) that node will be removed out of the flow of the linked list. We are given a LinkedList structure already containing nodes. We just need a stand alone function that when given a specific node, that node will be deleted from the list.
//params - {ListNode} node
//return - void
//solution - to delete the given node, we can simply assign its val the val of the node that comes after it and then assign its next value to the one that comes after it. What this does is the node that we want to delete becomes the node that comes after it (.val and .next), and therefore, the node that comes after it is now out of the flow of the linked list.

//delete node function
function deleteNode(node) {
  node.val = node.next.val
  node.next = node.next.next
}

// Test Case with example

//node constructor function
function ListNode(val) {
  this.val = val
  this.next = null
}

//linked list contructor function
function LinkedList() {
  this.head = null

  this.append = function(val) {
    const newNode = new ListNode(val)
    if(!this.head) {
      this.head = newNode
    }
    else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

  this.print = function() {
    current = this.head
    while(current) {
      console.log(current.val)
      current = current.next
    }
  }
}

//test case
const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.print()

const nodeToDelete = linkedList.head.next
deleteNode(nodeToDelete)

linkedList.print()

//REFLECTION - failed attempt 1
//needed a refresher on linked lists. 