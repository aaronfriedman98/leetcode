//description - given the root of a tree, return the level order traversal of its node's values (from left to right, level by level)
//params - {TreeNode} root
//return - {number[][]}
//solution - initialize an array to hold the result, check if the root is null and if yes return result as is, initialize another array called queue and asign the root inside of the queue, write a while loop that runs as long as the queue is not empty (to represent each level), initialize another array and call it current, create a var called levelSize that will be used to represent the size of each level (either 1 or 2), now write a for loop that runs levelSize times (for the amount of nodes in that level), grab the first node of the queue and place it inside of current, check if that node has a right node then left node and if yes push it to the queue, at the end of the while loop push the current array to the result array (which will contain each level in its own array), return the result

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function levelOrderTraversal(root) {
    // Create an array to store the result
    const result = [];
  
    // Check if the root is null (empty tree)
    if (!root) {
      return result;
    }
  
    // Create a queue to perform level-order traversal
    const queue = [root];
  
    // Continue traversal while the queue is not empty
    while (queue.length > 0) {
      const current = []; // Initialize an array to store values of the current level
      const levelSize = queue.length; // Get the number of nodes at the current level
  
      // Process nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift(); // Remove the first node from the queue
        current.push(node.val); // Add the value to the current level array
  
        // Enqueue the left and right children (if they exist)
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
  
      result.push(current); // Add the current level array to the result
    }
  
    // Return the level order traversal result
    return result;
  }
  
  // Example usage:
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  const traversalResult = levelOrderTraversal(root);
  console.log(traversalResult);
  