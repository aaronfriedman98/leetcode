//description - given the root of a node tree, return true if the tree is a valid binary search tree (BST). A BST is where all of the sub nodes to the left are less than its root, but all the sub nodes to the right are larger than its root
//params - {TreeNode} root
//return - {TreeNode}
//solution - create an array that will be used to hold all of the tree nodes from the leftmost subnodes to the rightmost subnodes, write a recursive function that first finds the leftmost subnode and push all of the subsequent nodes into the array, next do the same for the right, loop through the array and check if all the numbers are ascending and return true or false

function isValidBST(root) {
    //initialize array to hold tree nodes from left to right
    let visited = []
  
    //recursive function to traverse the nodes and fill the array
    function traverseNodes(node) {
      if(node === null) {
        return
      }
      traverseNodes(node.left)
      visited.push(node.val)
      traverseNodes(node.right)
    }
    //call the traverse function 
    traverseNodes(root)
  
    //loop through the array and check whether it is ascending or not
    for(let i = 0; i < visited.length - 1; i++) {
      if(visited[i] >= visited[i+1]) {
        return false
      }
    }
    return true  
  }
  
  
  //test case
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  const root = new TreeNode(2);
  root.left = new TreeNode(1);
  root.right = new TreeNode(3);
  
  console.log(isValidBST(root)); // Output: true
  