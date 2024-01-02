//description - given a signed 32-bit integer, reverse the integer. If after the reversal, the integer is outside of the 32-bit range (-2^31, 2^31 - 1) then return 0
//params - {number} int
//return - {number}
//solution - 
//Step 1: initialize var isNegative, write an if statement that checks if the int is positive or negative and assign true or false to isNegative.
//Step 2: initialize var reversedInt, assign to it - convert the int into a string, split the string into an array and reverse it, then join it, and surround all this in a parseInt function to convert it back into an integer.
//Step 3: if isNegative is true, make reversedInt negative
//Step 4: check if the new integer is within the 32-bit range - initialize var upperbound and assign Math.pow(2,31) - 1 to it, and initialize var lowerbound and assign -upperbound to it.
//Step 5: check if the int is within the range, if yes return the int, if not return 0.


function reverseInt(num) {
  //check if num is negative
  let isNegative = false
  num < 0 ? isNegative = true : isNegative
  //reverse the number
  let reversedInt = parseInt(num.toString().split("").reverse().join(""))
  isNegative ? reversedInt = -reversedInt : reversedInt
  //check if it is still in the 32-bit range
  let upperbound = Math.pow(2,31)
  let lowerbound = -upperbound
  return reversedInt < upperbound && reversedInt > lowerbound ? reversedInt : 0
}


console.log(reverseInt(123)) // 321
console.log(reverseInt(-123)) // -321
console.log(reverseInt(120)) // 21
console.log(reverseInt(-2345654323456765432)) // 0

//REFLECTION - failed attempt 1
//Wasnt sure how to deal with the 32-bit range. Also forgot to deal with negative edge case.
//REFLECTION - failed attempt 2
//remembered how to to reverse the number and how to handle 32-bit range. But forgot to deal with negative edge case.