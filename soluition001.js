// @problem - array, target -> indices of the 2 numbers that add to the target
// @params - {number[]} nums, {number}, target
// @return - {number[]}
// @solution - use nested loops to add each of the numbers together 
//             until we find the 2 numbers that add to the targer
//             return the indices of those numbers

function findIndices(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
          return [i,j]
        }
      }
    }
  }
  
  
  
  
  
  console.log(findIndices([1,2,3,4,5], 9),' = [ 3, 4 ]')
  console.log(findIndices([4,3,8,9], 12),' = [ 0 , 2 ]')
  