//description - given 2 strings, return true if they are anagrams and false if not
//params - {string} a, {string} b
//return - {boolean}
//solution - create 2 map objects and copy both strings into the maps keeping track of the amount of each char, compare each char and amount and return true or false

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
  
  
  // console.log(isAnagram('hello', 'loehl')) // true
  // console.log(isAnagram('ads', 'addd')) // false
  console.log(isAnagram("rat", "car")) // false