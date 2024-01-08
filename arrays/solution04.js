//description - given an array of numbers (nums), return true if any number appears twice, and false if all the numbers are unique.
//params - {number[]} nums
//return - {boolean}
//solution - hashmap approach:
//Step 1: create a map object. This will be used to store all of the values as we traverse the array.
//Step 2: loop through each element of the array and first check if that value exists in the map object and if yes return true, and if not then save that value into the map object for future checks
//Step 3: outside of the loop, return false. (if the loop ends then all the numbers must be unique.)

function isDuplicate(nums) {
  let mappedNums = new Map()
  for(num of nums) {
    if(mappedNums.has(num)) {
      return true
    }
    mappedNums.set(num)
  }
  return false
}

console.log(isDuplicate([1,2,3,4,5,4])) // true
console.log(isDuplicate([1,2,3,4,5])) // false

//REFLECTION - Success Attempt 1
