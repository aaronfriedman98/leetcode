//description - given 2 arrays, return an array containing the  of both arrays. when finding and returning the intersection, the order does not matter
//params - {numbers[]} nums1, {numbers[]} nums2
//return - {numbers[]}
//solution - create a map object that will hold all of the numbers of nums1 as its key and the frequencies as its value. Then find the intersects by looping through nums2 and check if each number exists as a key in the map object, if it does, and the value is above zero, then push it to the intersect array and decrement 1 from the value of the key

function intersect(nums1, nums2) {
    let intersect = []
    let numsMap = new Map()
    for(const num of nums1) {
      numsMap.set(num, (numsMap.get(num) || 0) + 1)
    }
    for(const num of nums2) {
      if(numsMap.has(num) && numsMap.get(num) > 0) {
        intersect.push(num)
        numsMap.set(num, numsMap.get(num) - 1)
      }
    }
    return intersect
  }
  
  
  console.log(intersect([2,4,6,3,4], [4,2,6,8,6,3])) //[4,2,6,3]
  console.log(intersect([6,6,6,3,5,7], [6,3,5,6,7])) // [6,3,5,6,7]