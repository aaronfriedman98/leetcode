//description - given the root of a node tree, return whether the tree is symmetrical (each side is mirrored)
//params - {TreeNode} root
//return - {boolean}
//solution - firstly check if the root is null or not, if it is then the tree is symmetrical, now to compare both sides of the tree write a helper recusive function that takes 2 params - left and right, first check if both are null and then return true if yes, then check if both are equal and return false if not, now use recursion and return the traversal of the entire left side of the tree and the entire right side of the tree with the parameters the left.left and right.right && left.right and right.left, now return and call the helper function with the params root.right and root.left

function isSymmetric(root) {
    if(root === null) {
      return true
    }
    function isMirror(left, right) {
      if(left === null && right === null) {
        return true
      }
      if(left === null || right === null) {
        return false
      }
      else if(left.val !== right.val) {
        return false
      }
      return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }
    return isMirror(root.left, root.right)
  }
  
  
  
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Helper function to build a binary tree.
  function buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const nodes = arr.map(val => (val !== null ? new TreeNode(val) : null));
    const n = nodes.length;
    for (let i = 0; i < n; i++) {
      if (nodes[i] === null) continue;
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      nodes[i].left = leftIndex < n ? nodes[leftIndex] : null;
      nodes[i].right = rightIndex < n ? nodes[rightIndex] : null;
    }
  
    return nodes[0];
  }
  
  // Test case 1: A symmetric binary tree.
  const tree1 = buildTree([1, 2, 2, 3, 4, 4, 3]);
  console.log(isSymmetric(tree1)); // Should return true
  
  // Test case 2: An asymmetric binary tree.
  const tree2 = buildTree([1, 2, 2, null, 3, null, 3]);
  console.log(isSymmetric(tree2)); // Should return false
  