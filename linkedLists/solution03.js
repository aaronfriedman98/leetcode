//description - given the head of a linked list, reverse the list and return the reversed list
//params - {ListNode} head
//return - {ListNode}
//solution - 3 pointer method:
//Step 1: initialize vars - current - prev - next, and set current = head, and prev and next = null. (current will be used to traverse the linked list, prev will be used reverse the .next property of each node, and next will be used as a temp var to remember the next node so that current can know where to traverse to)
//Step 2: write a while loop that runs as long as current !== null
//Step 3: within the loop: set var next as current.next (to act as a temp)
//Step 4: set current.next to var prev (this actually reverses the current node)
//Step 5: set prev to current (move prev to the next node over that will have the node after it point to it once reversed)
//Step 6: set current to var next (move over to the next node that requires reversing)
//Step 7: once the list is reversed, var prev will equal the new head of the list

function reverseList(head) {
  //traversal var
  let current = head
  //temp var
  let next = null
  //reversal var
  let prev = null

  //reverse the .next property of each node
  while(current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}



// Test Case with example

//node constructor function
function ListNode(val) {
  this.val = val;
  this.next = null;
}

//linked list contructor function
function LinkedList() {
  this.head = null;

  this.append = function (val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  };

  this.print = function () {
    current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  };
}

// example
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log("Original Linked List:");
linkedList.print();

console.log("\nReversed Linked List:");
let head = linkedList.head;
let reversedHead = reverseList(head);
let reversedList = new LinkedList();
reversedList.head = reversedHead;
reversedList.print();

//REFLECTION - failed attempt 1
//had trouble understanding the logic of reversing a linked list. Now i understand that we are reversing the .next property of each node, but the nodes themselves aren't moving. There is no order to nodes of a linked list anyway. The order is determined by the .next property of each node.