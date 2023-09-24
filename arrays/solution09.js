//description - given an array and a target number, return the indices of elements that add up to the target number.
//params - {number[]} nums, {number} target
//return - {number[]}
//solution - create a map object. Loop through the array, check if the complement number to the target number is found in the map, if it is, then return both indices, if not then save the value and index to the array

function sumIndices(nums, target) {
    let numMap = new Map()
    let solution = []
    let complement = 0
    for(let i = 0; i < nums.length; i++) {
      complement = target - nums[i]
      if(numMap.has(complement)) {
        return [numMap.get(complement), i]
      }
      else {
        numMap.set(nums[i], i)
      }
    }
    return solution
  }
  
  
  console.log(sumIndices([1,5,2,7], 9)) //[2, 3]