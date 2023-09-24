//description - given an array of nums, return the same array with all of the zeros moved to the end
//params - {number[]} nums
//return - {number[]}
//solution - 2 pointer approach: create var that keeps track of the index's where the non-zero elements will go. Loop through the array and check if each element is equal to zero or not. If it is not equal to zero then assign the index with non-zero var to index i and assing index i to 0. Afterwards, add one to the non-zero variable. 


function moveZeros(nums) {
    let nonZeroIndex = 0
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        nums[nonZeroIndex] = nums[i]
        if(nonZeroIndex !== i) {
        nums[i] = 0
        }
        nonZeroIndex++
      }
    }
    return nums
  }
  
  
  console.log(moveZeros([1,0,4,0,3])) // [1,4,3,0,0]
  console.log(moveZeros([0,0,3,4,0,1])) // [3,4,1,0,0,0]
  