//description - given a string, return the index of the first unique char. If there is non, return -1.
//params - {string} str
//return - {number}
//solution - create a map object, loop through each char of the string, search the map for the current char, if it does not exist then save it to the map with a value of 1, if it does exist then find the existing key and add 1 to the value. loop through the map and find the first key with the value of 1. loop through the string searching for the index of the unique char

function findUniqueChar(str) {
    let chars = new Map()
    for(char of str) {
      if(!chars.has(char)) {
        chars.set(char, 1)
      }
      else {
        chars.set(char, chars.get(char) + 1)
      }
    }
    for(let i = 0; i < str.length; i++) {
      if(chars.get(str[i]) === 1) {
        return i
      }
    }
    return -1
  }
  
  
  console.log(findUniqueChar("hello")) // 0
  console.log(findUniqueChar("aabbc")) // 4
  console.log(findUniqueChar("aabb")) // -1