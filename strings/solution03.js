//description - given a string, return the index of the first non-repeating chararacter. If it does not exist then return -1
//params -  {string} str
//return - {number}
//solution - hashmap:
//Step 1: create a Map object (that will store each char and its frequency)
//Step 2: loop through each char of the string
//Step 3: in each iteration, set the current char into the map object with the default value of 1, and add 1 to the value if a value for this char already exists.
//Step 4: now loop through the str again and in each iteration, check the map for the current char and if it is returns 1 then return the index of that char (i). otherwise return -1

function firstUniqChar(str) {
  let chars = new Map()
  for(char of str) {
    chars.set(char, (chars.get(char) + 1) || 1)
  }
  for(let i = 0; i < str.length; i++) {
    if(chars.get(str[i]) === 1) {
      return i
    }
  }
  return -1
}

console.log(firstUniqChar('test')) // 1
console.log(firstUniqChar('aabbcc')) // -1
console.log(findUniqueChar("hello")) // 0
console.log(findUniqueChar("aabbc")) // 4

//REFLECTION - Failed attempt 1
//remember how to set keys and values in a map object. But forgot how to search the map for the index of the first unique char, by looping through the string and returning i.