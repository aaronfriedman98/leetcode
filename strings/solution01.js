//description - write a function that takes in a string made up of an array of chars, and reverse it in-place
//params - {char[]} s
//return - void
//solution #1 - use the built-in array.reverse method
//solution #2 - brute force approach: loop through the array swapping elements in place:
//Step 1: initialize var len to Math.floor(s.length / 2). Because we only need to iterate halfway down the array to successfully swap all of the elements.
//Step 2: write the for loop that iterates from 0 up to len
//Step 3: within the loop, initialize var temp and assign s[i] to it, then set s[i] to s[s.length - 1 - i], and then set s[s.length - 1 - i] to temp 


//optimal solution
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


//REFLECTION - Passed/failed  attempt 1
//passed with the simple solution of using the reverse() array method. But failed first attempt to perform the reversal through brute force.