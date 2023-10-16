//description - given the head of a linked list, determine whether the list contains a cycle
//params - {ListNode} head
//return - {ListNode}
//solution - create 2 pointers - fast and slow, both equal the head and progress the slow by one and the fast by 2 each time, if fast ever becomes equal to slow then there is a cycle, otherwise there is none

function hasCycle(head) {
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
  
      if(fast === slow) {
        return true
      }
    }
    return false
  }