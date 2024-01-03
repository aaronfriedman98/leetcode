//description - given 2 strings, return true if they are anagrams, otherwise return false
//params - {string} str1, {string} str2
//return - {boolean}
//solution - use hashmap approach
//Step 1: first compare the length of both stings to see if they are even the same length. If not, then return false.
//Step 2: create 2 map objects that will be used to store the values and frequencies of both strings.
//Step 3: loop through the length of the strings and save the values and frequencies of each string to its map object.
//Step 4: loop through the keys of one of the maps and in each iteration check if the values and keys equal the values and keys of the 2nd map. Return true or false.

function isAnagram(a, b) {
    let mapA = new Map()
    let mapB = new Map()
    //check if the strings are even the same length
    if(a.length !== b.length) {
      return false
    }
    //copy the chars of each string to the map objects
    for(let i = 0; i < a.length; i++) {
      mapA.set(a[i], (mapA.get(a[i]) || 0) + 1)
      mapB.set(b[i], (mapB.get(b[i]) || 0) + 1)
    }
    //compare the maps
    for(const key of mapA.keys()) {
      if(!mapB.has(key) || mapB.get(key) != mapA.get(key)) {
        return false
      }
    } return true
  }
  
  
  console.log(isAnagram('hello', 'loehl')) // true
  console.log(isAnagram('ads', 'addd')) // false
  console.log(isAnagram("rat", "car")) // false

  //REFLECTION - Failed attempt 1
  //didnt know that i can iterate through the keys of a map object. Now i can compare 2 map objects to see if their values and frequencies are equal. Before i was trying to compare values from a string to a map but had issues comparing the frequencies.