//description - given an array of nums, return the largest sub-array
//params - {number[]} nums
//return - {number[]}
//solution - kadanes algorithm: to find the largest sum sub-array, you can keep a running sum as you iterate through the array. If adding the subsequent number will make the sum < zero, then restart the sum to zero. After each iteration, set the maximum sum to the highest existing sum by finding the maximum sum of its current sum and the currentSum variable

function maxSubArray(nums) {
    let currentSum = nums[0]
    let maxSum = nums[0]
    for(let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i])
      maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
  }
  
  console.log(maxSubArray([1,2,3,-5,2,4,6])) // 13
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6