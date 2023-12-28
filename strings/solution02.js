//description - given a signed 32-bit integer, reverse the integer. If after the reversal, the integer is outside of the 32-bit range (-2^31, 2^31 - 1) then return 0
//params - {number} int
//return - {number}
//solution - 
//Step 1: initialize var isNegative, write an if statement that checks if the int is positive or negative and assign true or false to isNegative.
//Step 2: initialize var reversedInt, assign it to - convert the int into a string, split the string into an array and reverse it, then join it, and afterwards parse it back into an integer.
//Step 3: if isNegative is true, make reversedInt negative
//Step 4: check if the new integer is within the 32-bit range - initialize var upperbound and assign Math.pow(2,31) - 1 to it, and initialize var lowerbound and assign -upperbound to it.
//Step 5: check if the int is within the range, if yes return the int, if not return 0.


function reverse32bitInt(int) {
  // check if int is positive or negative
  let isNegative = int >= 0 ? false : true
  // reversal - convert int > string > array > reverse > string > parseInt
  let reversedInt = int.toString().split("").reverse().join("")
  reversedInt = parseInt(reversedInt,10)
  //remember if the int was negative and remake it negative if it was
  if(isNegative) {
    reversedInt = -reversedInt
  }
  //set the range for 32-bit integer
  let upperbound = Math.pow(2, 31) - 1
  let lowerbound = -upperbound
  //return the int if it is within the range, otherwise return 0
  return reversedInt <= upperbound && reversedInt >=lowerbound ? reversedInt : 0
}


console.log(reverse32bitInt(123)) // 321
console.log(reverse32bitInt(-123)) // -321
console.log(reverse32bitInt(120)) // 21
console.log(reverse32bitInt(-2345654323456765432)) // 0

//REFLECTION - failed attempt 1
//Wasnt sure how to deal with the 32-bit range. Also forgot to deal with negative edge case.