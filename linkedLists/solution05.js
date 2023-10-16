//description - given the head of a node list return true if the list is a palindrome and false if not
//params - {NodeList} head
//return - {NodeList}
//solution - find the middle node, reverse the 2nd half of the list, compare the first half with the 2nd half

function isPalindrome(head) {
    // Edge case: an empty list or a list with a single node is a palindrome.
    if (head === null || head.next === null) {
      return true;
    }
  
    // Find the center node
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half
    let prev = null;
    let current = slow;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    // Compare both halves
    let left = head;
    let right = prev;
    while (right !== null) {
      if (left.val !== right.val) {
        return false;
      }
      left = left.next;
      right = right.next;
    }
  
    return true;
  }
  