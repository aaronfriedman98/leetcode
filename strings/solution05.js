//description - given a string, determine whether it is a palindrome or not. A palidrome is a string that when removing all non-alphanumerical characters (spaces, capitalization, puncuation) the phrase is the same when reversed
//params - {string} str
//return {boolean}
//solution - remove all of the non-alphanumerica characters from the string, change the uppercase letters into lowercase letters, save the string into a temp variable, convert the string to an array, reverse the temp var, join it back into a string, and compare the reversed string to the original, and if they are equal return true, otherwise return false


function isPalindrome(str) {
    let newStr = str.replace(/[^a-zA-Z0-9]/g, '')
    newStr = newStr.toLowerCase()
    let reversedStr = newStr.split("").reverse().join("")
    if(reversedStr === newStr) {
      return true
    }
    return false
  }
  
  
  console.log(isPalindrome("Race., Car")) //true
  console.log(isPalindrome("raceccar")) //false