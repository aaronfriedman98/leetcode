//description - given a node head and an index n, return the node list with the nth node from the end removed
//param - {ListNode} head, {number} n
//return - {ListNode}
//solution - create a dummy node that is placed before the head, create 2 variables called fast and slow that will be used to find the nth node from the end, use a loop to distance the fast variable from the slow variable nth nodes from each other, then use a while loop to move the fast and slow variables down the list until the end which will leave the slow.next as the node to be removed, return the head

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let fast = dummy
    let slow = dummy
  
    for (let i = 0; i <= n; i++) {
      fast = fast.next
    }
  
    while (fast !== null) {
      fast = fast.next
      slow = slow.next
    }
  
    slow.next = slow.next.next
  
    return head
  }
  
  // test case
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Helper function to convert a linked list to an array for easy testing
  function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
  
  // Test case
  const node5 = new ListNode(5);
  const node4 = new ListNode(4);
  const node3 = new ListNode(3);
  const node2 = new ListNode(2);
  const node1 = new ListNode(1);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  console.log(linkedListToArray(node1)); // Output: [1, 2, 3, 4, 5]
  
  const result = removeNthFromEnd(node1, 2);
  console.log(linkedListToArray(result)); // Output: [1, 2, 3, 5]
  