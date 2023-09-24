//description - given an array of nums that represent a number, create a function that adds one to the number and return it as an array
//params - {number[]} nums
//return - {number[]}
//solution - join the array, convert it to a number array, add one, convert to a string, then split the array



function plusOne(nums) {
    let number = nums.join("")
    number = BigInt(number) + 1n
    number = number.toString()
    return number.split("")
  }
  
  
  console.log(plusOne([1,2,3])) // [1,2,4]
  console.log(plusOne([9])) // [1,0]