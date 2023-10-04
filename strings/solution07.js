//description - given 2 strings (needle and haystack), return the index of the beginning of the first occurence of the needle in the haystack, if there is no occurence, then return -1
//params = {string} haystack, {string} needle
//return = {number}
//solution - write a loop that iterates the length of the haystack - the length of the needle, then use the substring method to compare the needle with the substring of each variation of the haystack

function findNeedle(needle, haystack) {
    for(let i = 0; i <= haystack.length - needle.length; i++) {
      if(haystack.substring(i, needle.length + i) === needle) {
        return i
      }
    }
    return -1
  }
  
  
  console.log(findNeedle("hello", "hello there")) // 0
  console.log(findNeedle("there", "hello there")) // 6
  console.log(findNeedle("hi", "hello there")) // -1
  
  