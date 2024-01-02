//description - given 2 parameters - array of integers and a number (n), rotate the array to the right by n steps. n will always be a positive number.
//params - {number[]} nums, {number} n
//return - {number[]}
//solutions - by reversing the entire array, then reversing the numbers from nums[0] until n, and finally reversing the remaining numbers, that effectively rotates the array to the right by n steps.
//Method 1:
//Step 1: reverse the entire array with the array.reverse() method
//Step 2: reverse the numbers from nums[0] until n - splice the array starting from index 0 and remove n elements, and replace them with the entire array of nums using the spread operator (...) sliced from index 0 to n reversed using the array.reverse() method.
//Step 3: reverse the remaining elements  - splice the array starting from n until the end of the array (index [nums.length - n]), and replace those elements with ...nums sliced from n until the end reversed (same as above)
//Step 4: return nums
//Method 2:
//Step 1: write a helper function that reverses a given array
//Step 2: reverse the entire array 
//Step 3: reverse the numbers from nums[0] until n
//Step 4: reverse the the remaining numbers
//Step 5: return nums

// Method 1
function rotate(nums, n) {
  // In case k is larger than the array length
  n %= nums.length; 
  //reverse the entire array
  nums.reverse()
  //reverse the first n elements
  nums.splice(0, n, ...nums.slice(0, n).reverse())
  //reverse the remaining elements
  nums.splice(n, nums.length - n, ...nums.slice(n).reverse())

  return nums
}

//Method 2
function reverse(nums, start, end) {
  while(start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}

function rotate(nums, n) {
  // In case k is larger than the array length
  n %= nums.length;
  //reverse the entire array
  reverse(nums, 0, nums.length - 1)
  //reverse the first n elements
  reverse(nums, 0, n - 1)
  //reverse the remaining elements
  reverse(nums, n, nums.length - 1)

  return nums
}

console.log(rotate([1,2,3,4,5], 3)) // [3,4,5,1,2]

//REFLECTION - failed attempt 1
//Forgot the algorithm that a triple reversal like above will effectively rotate the array n times to the right. Also forgot to account for the edge case where n is larger than the array length. Also, didnt think to use the splice and slice method as used above with the spread operator. Also, inititially forgot that for the 2nd method, i needed a custom reverse method that can reverse separate parts of the array.