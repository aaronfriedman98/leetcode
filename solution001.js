// @problem - array, target -> indices of the 2 numbers that add to the target
// @params - {number[]} nums, {number}, target
// @return - {number[]}
// @solution - use nested loops to add each of the numbers together 
//             until we find the 2 numbers that add to the targer
//             return the indices of those numbers

// @time complexity - O(n^2)
function findIndices(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
        if(nums[i] + nums[j] === target && i !== j) {
          return [i,j]
        }
      }
    }
  }

  //OPTIMIZED SOLUTION

// @time complexity - O(n)
  function findIndices(nums, target) {
    //create Map object to store the nums and their indices
    const numIndices = new Map()
    //loop through nums and check if the complement num is in numIndices
    for(let i = 0; i < nums.length; i++) {
      let num = nums[i]
      let complement = target - num
  
      if(numIndices.has(complement)) {
        //return the index of the complement and return the current index
        return [numIndices.get(complement), i]
      }
      numIndices.set(num, i)
    }
    return []
  }
  
  
  
  console.log(findIndices([1,2,3,4,5], 9),' = [ 3, 4 ]')
  console.log(findIndices([4,3,8,9], 12),' = [ 0 , 2 ]')
  