//description - given a sorted ascending array of nums, convert it into a height balanced binary tree
//params - {number[]} nums
//return - {TreeNode}
//solution - write a recursive function to create the node tree: write a base case - check if nums.length === 0 and if yes return null, find the middle element of the array to use as the root, create a tree node with the root of that middle value, to fill up the left sub tree write a recursive function with the parameter of an array that is made up of all the elements from the left side of the middle element and assign the return value to the root.left (this will use recursion to fill up the left subnodes), then write a recursive function with the parameter of an array tha tis made up of all the elements from the right side of the middle element and assign the return value to the root.right (this will use recursion to fill up all of the right subnodes), then return the root

function sortedArrayToBST(nums) {
    //base case
    if(nums.length === 0) {
      return null
    }
  
    //find the middle element array nums
    const mid = Math.floor(nums.length / 2) 
  
    //create a tree node with the middle element as the root
    const root = new TreeNode(nums[mid])
  
    //recursively build the left and right subtrees
    //for the left subtree, pass a sub array of all the elements to the left of the middle
    root.left = convertSortedArrayToBST(nums.slice(0, mid))
    //for the left subtree, pass a sub array of all the elements to the left of the middle
    root.right = convertSortedArrayToBST(nums.slice(mid + 1))
  
    return root
  }