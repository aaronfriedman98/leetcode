//description - given an array of numbers, where every element appears twice, besides for one element. Find that element and return it
//params - {numbers[]} nums
//return - {number}
//solution - create a map object, each iteration check if the current key can be found in the map, if it is not, then add the key (current value) to the map with the index of 1. if the key does exist in the map then find that key and add 1 to its current value of 1. Once the map is filled, loop through the values of the map to find the 1 and return its key. 

function findSingle(nums) {
    let numMap = new Map()
    for(let i = 0; i < nums.length; i++) {
      if(numMap.has(nums[i])){
        numMap.set(nums[i], numMap.get(nums[i]) + 1)
      } else {
        numMap.set(nums[i], 1)
      }
    }
    let result = 0
    numMap.forEach((count, num) => {
      if(count === 1) {
        result = num
      }
    })
    return result
  }
  

  //description - given an array of nums, where all of the numbers have duplicates besides for one, return the one unique number
//params - {number[]} nums
//return - {number}
//solution - create a map object, loop through the array and each iteration set each value as a key in the map and the instances as its value, search the map for the only value that is === to 1 and return it

function findUniqueNum(nums) {
  //create map object
  let numMap = new Map()

  //iterate through nums and copy the numbers and instances as keys and values in the map
  for(const num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1)
  }

  //set a variable to hold the result
  let result = 0
  
  //loop through the map and search for the unique value (1)
  numMap.forEach((instance, num) => {
    if(instance === 1) {
      result = num
    }
  })
  return result
}

  
  console.log(findSingle([1,2,3,4,1,3,4])) // 2
  console.log(findSingle([1])) // 1