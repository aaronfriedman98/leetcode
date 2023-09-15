//description - given an array of nums and a positive number, rotate the array the amount of the number given
//params - {number[]} nums, {number} rotateNum
//return - void (just modify the original array)
//solution - reverse the entire array, then reverse the numbers from nums[0] until the rotateNum, and then reverse the remaining elements


function rotate(nums, k) {
    const n = nums.length;
    k %= n; // In case k is larger than the array length
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
  
    return nums
  }
  
// Helper function to reverse an array from start to end
  function reverse(nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
  
  
  
  
  console.log(rotate([1,2,3,4,5,6], 3)) // [5,6,1,2,3,4]