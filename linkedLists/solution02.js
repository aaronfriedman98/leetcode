//description - given the head of a linked list and a number (n), remove the nth number from the end of the linked list, and return the head (linked list)
//params - {ListNode} head, {number} n
//return - {ListNode}
//solution - 2 pointer approach
//Step 1: initialize var dummy, to act as a dummy node that comes before the head. This is in order to handle the edge case if the head node is removed.
//Step 2: initialize vars - fast and slow, and assign the head to both of them. These will be used as pointers. slow will find the nth node from the end and fast will "tell" slow when to stop.
//Step 3: distance slow and fast by nth nodes by only moving fast with a for loop.
//Step 4: use a while loop to move fast and slow up by one until fast reaches null. This will leave slow as the node right before the node that will be deleted.
//Step 5: remove the nth node from the end simply by changing slow.next to slow.next.next and return dummy.next (this is to handle the edgecase of if the head was the node that was deleted).

function deleteNthNodeFromEnd(head, n) {
  //Create a dummy node and sets its next value to the head
  let dummy = new ListNode(0);
  dummy.next = head;

  //Initialize two pointers, fast and slow, both initially pointing to the dummy
  let fast = dummy;
  let slow = dummy;

  //move the fast pointer ahead by n steps
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  //move both pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  
  //remove the nth node from the end
  slow.next = slow.next.next;
  //return the updated head
  return dummy.next;
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

//test case
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print();

const head = linkedList.head;
console.log(deleteNthNodeFromEnd(head, 2)); //1

linkedList.print(); // 1 > 2 > 4


//REFLECTION - failed attempt 1
//Had trouble locating the nth node from the end. Also needed to remember to create a dummy node to handle the edge case of the head node being removed.
//REFLECTION - failed attempt 2
//didnt realize that var slow was supposed to be the node right before the node that was to be deleted. I thought it was supposed to find the actual location of the node. But that wouldn't make sense because then we wouldnt be able to delete the node, since slow is only the reference of the node. Only if we were given the actual node to be deleted would we be able to delete it, which would be by taking the value of the next node and also changing the .next property of the node to be deleted (taking the place of the next node). Also, forgot to return dummy.next instead of head (to handle the edgecase of the head node being deleted).
