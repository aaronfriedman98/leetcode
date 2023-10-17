//description - given the root of a binary tree, return the max depth of the tree
//params - {TreeNode} root
//return - {number}
//solution - use recursion to traverse all of the nodes in the tree and find the max depth



  // Definition for a binary tree node.
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