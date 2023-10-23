//description - check if an array contains any duplicate values, return true or false
//params - {numbers[]} nums
//return - {boolean}
//solution - create another array, loop through the original array and copy each value to the new array, and in each iteration loop through the 2nd array and check for duplicate values
//optimized solution - create a Map object, loop through the array and check if the Map has the current value, if it does then return true, if it doesn't then add the value to the Map and continue looping. If the loop finishes then return false

function duplicates(nums) {
    let tempArray = []
    tempArray.push(nums[0])
    for(let i = 1; i < nums.length; i++) {
      for(let j = 0; j < tempArray.length; j++) {
        if(nums[i] === tempArray[j]) {
          return true
        }
      } tempArray.push(nums[i])
    } return false
  }

    //OPTIMIZED SOLUTION
    function containsDuplicate(nums) {
      // Create a Map to store the numbers we've seen
      let numMap = new Map();
    
      // Iterate through the array
      for (let i = 0; i < nums.length; i++) {
        // If the current number already exists in the Map, return true (contains a duplicate)
        if (numMap.has(nums[i])) {
          return true;
        }
        // Otherwise, add the current number to the Map for future reference
        else {
          numMap.set(nums[i]);
        }
      }
    
      // If the loop completes without finding any duplicates, return false
      return false;
    }
    
  
  console.log(duplicates([1,3,4,5,5,6,6])) //true
  console.log(duplicates([1,3,4,5,6,7])) //false
  