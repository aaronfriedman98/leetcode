//description - given a non-decreasing array of nums, remove all of the duplicate numbers in-place and keep all of the unique numbers in the correct order. And then return the total number of unique elements.
//params - {number[]} nums
//return - {number}
//solution - 2 pointer approach - one pointer to keep track of where i want to place the unique numbers, and the 2nd pointer to iterate through the array searching for unique numbers that need to be placed in the correct location:
//Step 1: create var uniqueNumIndex to act as the first pointer to keep track of where i want to place the unique numbers, and assign it the value of 1 since index[0] is automatically unique and in the correct position
//Step 2: loop through the array, starting from index[1] since index[0] is automatically unique and in the correct position
//Step 3: within each iteration, check if nums[i] is > nums[i - 1], if yes, then that number is unique and must be placed in index[uniqueNumIndex], and then increment uniqueNumIndex by 1
//Step 4: return uniqueNumIndex

function removeDuplicates(nums) {
  let uniqueNumIndex = 1
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i - 1]) {
      nums[uniqueNumIndex] = nums[i]
      uniqueNumIndex++
    }
  }
  return uniqueNumIndex
}

  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // 4 ([1,2,3,4,_,_,_])
  console.log(removeDuplicates([1,1,1,2,3,5,5])) // 4
  console.log(removeDuplicates([1,1,2])) // 2
  console.log(removeDuplicates([])) //
  
//REFLECTION - Failed attempt 1
//understood the concept of 2 pointer approach, where one pointer keeps track of the unique number index while the other pointer (i) kept track of the unique numbers that needed to be placed in the correct index. But failed to understand the if statement within the loop that we must compare the current index (i) with the number right before it. I thought i should be compared to the unique number index, but that got rid of the 2nd unique number immediately after the default unique number (in an array that has a unique starting number).
//REFLECTION - Failed Attempt 2
//made small mistake in the loop iteration when finding the unique numbers. Compared nums[i+1] > nums[i] instead of nums[i] > nums[i-1]. This caused the 2nd unique number to be placed in the wrong index.
//REFLECTION - Success Attempt 3