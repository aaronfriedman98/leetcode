//description - given an array of nums, return the same array with all of the zeros moved to the end
//params - {number[]} nums
//return - {number[]}
//solution - 2 pointer approach: create var that keeps track of the index's where the non-zero elements will go. Loop through the array and check if each element is equal to zero or not. If it is not equal to zero then assign the index with non-zero var to index i and assign index i to 0 only if a number was swapped. Afterwards, add one to the non-zero variable. 


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
  
  //solution with comments
  function moveZeros(nums) {
    //initialize the nonZeroIndex to the beginning of the array
    let nonZeroIndex = 0
  
    //loop through the array swapping zeros for numbers
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
        nums[nonZeroIndex] = nums[i]
        //if a number was swapped with a zero, then change the current index to a zero
        if(i !== nonZeroIndex) {
          nums[i] = 0
        }
        nonZeroIndex++
      }
    }
  }
  
  console.log(moveZeros([1,0,4,0,3])) // [1,4,3,0,0]
  console.log(moveZeros([0,0,3,4,0,1])) // [3,4,1,0,0,0]
  