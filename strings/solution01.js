//description - reverse an array of strings, in place
//params - {string[]} string
//return - {string[]}
//solution - 1. use the reverse array method. 2. loop through the array the length of the array / 2. create a temp variable, and each iteration swap the first with the last and etc.

//built in solution
// function reverseString(string) {
//   return string.reverse()
// }

//brute force solution
function reverseString(string) {
    const len = Math.floor(string.length/2)
    for(let i = 0; i < len; i++) {
      let temp = ""
      temp = string[i]
      string[i] = string[string.length - 1 - i]
      string[string.length - 1 - i] = temp
    }
    return string
  }
  
  console.log(reverseString(["o","l","e","h"])) // ["h","e","l","o"]
  console.log(reverseString(["o","l","l","e","h"])) // ["h","e","l","l","o"]