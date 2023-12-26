//description - given an array of non-descending nums, remove all of the duplicate elements in place (moving them to the back of the array), and then return the number of unique elements.
//params - {number[]} nums
//return - {number}
//solution - 2 pointer approach:
//Step 1: initialize var uniqueNumIndex to act as the pointer for the index where the unique numbers will be placed. Initialize it to 1 since the first element is automatically unique and therefore in the correct place
//Step 2: loop through nums starting from index[1] since index[0] is automatically in the correct place since it is automatically unique, and i will act as the 2nd pointer to find the unique numbers that will be placed in the uniqueNumIndex
//Step 3: within each iteration, check if nums[i] > nums[i-1], if yes (which means the next num is unique) then swap it with array[uniqueNumIndex] and add 1 to uniqueNumIndex
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
//REFLECTION - Failed Attempt 2
//made small mistake in the loop iteration when finding the unique numbers. Compared nums[i+1] > nums[i] instead of nums[i] > nums[i-1]. This caused the 2nd unique number to be placed in the wrong index.