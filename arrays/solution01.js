//description - given an array of non-decreasing nums, remove the duplicates in-place so that each unique number appears only once, and then return the number of unique elements
//params - {number[]} nums
//return - {number}
//solution - 2 pointer approach:
// STEP 1: initialize var uniqueNumIndex to keep track of where we want the unique numbers to be placed. Initialize it to 1 because index[0] is automatically in the correct place
// STEP 2: loop through the array starting from index[1] since index[0] is automatically unique
// STEP 3: check if index[i] is unique, if yes then swap it with index[uniqueNumIndex] and then uniqueNumIndex++
// STEP 4: return uniqueNumIndex, which should be equal to the number of unique numbers

function removeDuplicates(nums) {
    if(nums.length === 0) {
      return 0
    }
    let uniqueNumIndex = 1
      for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1] 
          // && nums[i] > nums[uniqueNumIndex - 1]
          ) {
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