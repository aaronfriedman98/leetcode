//description - given the root of a tree, return the max depth of the tree
//params - {TreeNode} root
//return - {number}
//solution - use recursion to traverse the left and right nodes of the tree to find the max depth:
//Step 1: set a base case so that the recursion will stop at some point - if(root === null) {return 0}
//Step 2: initialize var leftDepth and set it recursively to maxDepth(root.left). What this does is it is recursively called until the param reaches past a leaf node and is equal to null. Once it equals null, the base case will stop the recursion and return 0. At this point, we are at the bottom of nested maxDepth function calls. leftDepth currently = 0.
//Step 3: initialize var rightDepth and set it recursively to maxDepth(root.right). The same thing happens here and at the last function call it returns 0
//Step 4: once these vars were assigned a value (0), return the maximum number between leftDepth and rightDepth and then add 1 to it. So, on the bottom most maxDepth function, leftDepth and rightDepth both = 0 of each of their respective depths. So, the maximum is automatically 0. And we add 1 to it so that we can count the node before we continue to unravel the recursion. In the next nested maxDepth function call, 



  // Definition for a binary tree node
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//solution
function maxDepth(root) {
if(root === null) {
  return 0
}
const left = maxDepth(root.left)
const right = maxDepth(root.right)

return Math.max(left, right) + 1
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(maxDepth(root)); // Output: 3 (longest path: 1 -> 3 -> 5)