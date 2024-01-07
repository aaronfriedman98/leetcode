//description - given the root of a tree, return the max depth of the tree
//params - {TreeNode} root
//return - {number}
//solution - use recursion to traverse the left and right nodes of the tree to find the max depth:
//Step 1: set a base case so that the recursion will stop at some point - if(root === null) {return 0}
//Step 2: initialize var leftDepth and set it recursively to maxDepth(root.left). What this does is it is recursively called until the param reaches the leftmost leaf node. Once it equals null, the base case will stop the recursion and return 0, and the function that was nested above it will continue with the next step.
//Step 3: initialize var rightDepth and set it recursively to maxDepth(root.right). The same thing happens here and at the last function call it returns 0
//Step 4: once these vars were assigned a value (0), return the maximum number between leftDepth and rightDepth and then add 1 to it. As the recursion unwinds, for each node, the algorithm calculates the maximum depth of its left and right subtrees, finding the longer branch. The depth of the current level is determined by taking the maximum depth of the subtrees and adding 1 to account for the current node. This process repeats for each node, and as the recursion unwinds, the maximum depth is propagated back up. The result is the overall maximum depth of the binary tree, considering the entire structure from the root to the farthest leaf node.

function maxDepth(root) {
  // Step 1: Base case - stop recursion when reaching a leaf node or null
  if (root === null) {
    return 0;
  }

  // Step 2: Recursively calculate the depth of the left subtree
  const leftDepth = maxDepth(root.left);

  // Step 3: Recursively calculate the depth of the right subtree
  const rightDepth = maxDepth(root.right);

  // Step 4: Return the maximum depth between leftDepth and rightDepth, plus 1 for the current node
  const currentDepth = Math.max(leftDepth, rightDepth) + 1;

  return currentDepth;
}


  // Definition for a binary tree node
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3 (longest path: 1 -> 3 -> 5)

//REFLECTION - failed attempt 1
//needed a refresher on recursion and node trees