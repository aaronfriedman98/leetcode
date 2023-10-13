//description - given the head of a linked list, return the list reversed
//param - {ListNode} head
//return - {ListNode}
//solution - create 3 pointers - prev current next, begin by assigning prev = null current = head next = null, we have to reverse each node 1 at a time, create a while loop that iterates until current reaches the end of the node list, assign current.next to the next var as a temp, set the current.next node to prev which reverses the node, now move the pointers one step over - set prev to current and current to next (the temp), after the loop return prev since that will end up holding the current node which ends up being the new head

function reverseNodeList(head) {
    let prev = null
    let current = head
    let next = null
  
    while(current != null) {
      next = current.next
      current.next = prev
  
      //move the vars to the next node
      prev = current
      current = next
    }
    return prev
  }