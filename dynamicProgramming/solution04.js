//description - you are a robber that plans to rob a row of houses. Adjacent houses cannot be robbed or the security alarm will go off. Given an array that represents the amount of money stashed in each house, return the maximum amount of money that can be robbed from these houses without setting off the security alarm.
//params - {number[]} nums
//return - {number}
//solution - dynamic programming approach: initialize an array to store the maximum sum up to each index of the nums array, set the base cases - array[0] is automatically === to nums[0] and array[1] will be equal to the larger value of either nums[0] or nums[1], now iterate through the rest of the array with the formlua - array[i] = Math.max(array[i - 1], array[i-2] + nums[i]), then return array[array.length - 1]


function rob(nums) {
    //edge cases
    if(nums.length === 0) {
      return 0
    }
    if(nums.length === 1) {
      return nums[0]
    }
    //initialize an array to store the maximum values at each index of array nums
    let array = []
  
    //base cases
    array[0] = nums[0]
    array[1] = Math.max(nums[0], nums[1])
  
    //dynamically find the maximum sum at each level of the array
    for(let i = 2; i < nums.length; i++) {
      array[i] = Math.max(array[i - 1], array[i - 2] + nums[i])
    }
    return array[array.length - 1]
  }
  
  console.log(rob([1,5,3,2,6,8,4])) // 15
  console.log(rob([1,2])) // 2
  console.log(rob([2,1,1,2])) // 
  console.log(rob([0]))