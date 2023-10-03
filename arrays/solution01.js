//description - pass in an array of nums in ascending order, and remove all of the duplicates in place and return the number of unique elements
//params - {number[]} nums
//return - {number}
//solution - create var for the unique numbers and set it to one since there is automatically one unique value. Loop through the array starting from the 2nd index since the first element is automatically a unique number. Compare the 2nd index of the array with the first index of the array, if they are the same then continue, if they are different, then first assign the value of i to nums[uniqueNumber] to make the element after the first unique number the next ascending number, and then add 1 to the unique number var. This will effectively place all of the unique numbers in the beginning of the array. Then return the unique number var.


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

  
  
  
  
  console.log(removeDuplicates([1,1,1,2,3,5,5])) // 4
  console.log(removeDuplicates([1,1,2])) // 2
  console.log(removeDuplicates([])) // 0
  