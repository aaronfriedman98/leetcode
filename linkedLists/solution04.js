//descrition - given the head of 2 sorted node lists, return a merged sorted list
//params - {nodeList} head1, {nodeList} head2
//return - {nodeList}
//solution - create a new node list to contain the merged lists, create a pointer to reference the current node in the merged list and create 2 pointers to reference the current node of the 2 merging lists, as long as both the lists still contain nodes compare the current value of each node and assign the value of the smaller one to the merged list, once one list empties assign the remaining nodes to the merged list

function mergeTwoLists(head1, head2) {
    let mergedList = new ListNode(0)
    let current = mergedList
    let pointer1 = head1
    let pointer2 = head2
  
    while(pointer1 != null && pointer2 != null) {
      if(pointer1.val <= pointer2.val) {
        current.next = new ListNode(pointer1.val)
        pointer1 = pointer1.next
      }
      else {
        current.next = new ListNode(pointer2.val)
        pointer2 = pointer2.next
      }
      current = current.next
    }
    while(pointer1 != null) {
      current.next = new ListNode(pointer1.val)
      pointer1 = pointer1.next
      current = current.next
    }
    while(pointer2 != null) {
      current.next = new ListNode(pointer2.val)
      pointer2 = pointer2.next
      current = current.next
    }
  
    return mergedList.next
    
  }