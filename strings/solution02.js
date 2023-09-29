//description - pass in a 32 bit int and reverse the number. if reversing will cause the int to go out of the 32 bit range then return 0.
//params - {number} int
//return - {number}
//solution - convert the int into a string, split the integer into an array, reverse the array, join the array, and then parseInt the string back into a number. check if the number fits 32 bit, if not then return 0

function reverseInt(int) {
    let negative
    if(int < 0) {
      negative = true
    }
    let intString = int.toString().split("").reverse().join("")
    let solution = parseInt(intString,10)
    if(negative) {
      solution = -solution
    }
    let upperBound = Math.pow(2,31) - 1
    let lowerBound = -upperBound
    return solution <= upperBound && solution >= lowerBound ? solution : 0
  }
  
  
  console.log(reverseInt(-123)) // -321
  console.log(reverseInt(120)) // 21
  console.log(reverseInt(-2345654323456765432)) // 0