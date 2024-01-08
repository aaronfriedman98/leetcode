//description - given 2 non-decreasing arrays of numbers and numbers representing the length of both arrays, merge the arrays as a non-decreasing array, but dont return a new array, rather modify the first array
//description - given 2 arrays of numbers in non-descending order - nums1 and nums2, and given 2 numbers, each representing the length of both of the arrays, merge the arrays together and have the merged array stored in nums1, without returning anything.
//params - {number[]} nums1, {number[]} nums2, {number} n, {number} m
//return - void
//solution - 3 pointer approach
//Step 1: initialize 3 var pointers - p, p1, p2. p = m + n - 1; p1 = n - 1; p2 = m - 1; (These pointers will act as different indices. p will be used to place the correct values into nums1. p1 will be used to traverse nums1 for comparison with nums2. p2 will be used to traverse nums2 for comparison with nums1.)
//Step 2: write a while loop that runs as long as p1 !== 0. (We will be traversing the array backwards for this solution. In order to merge the array in-place we need to merge the array starting from the end, otherwise we could override nums1 elements when nums2 elements need to be placed before it. In order to solve it by traversing forward you would need to make a new array, which would not be merging it in-place)
//Step 3: within each iteration, check if nums1[p1] <= nums2[p2]. If yes, then nums1[p] = nums2[p2]. Then p2--. If not, then nums1[p] = nums1[p1], and p1--.
//Step 4: once either p1 or p2 === 0, the loop stops. If p2 ran out, then the arrays were successfully merged, since the remaining elements of nums1 are already in the correct place since we were given non-descending arrays. If p1 ran out, then we need one more while loop that copies the remaining values of nums2 into nums1.

function mergeSortedArrays(nums1, m, nums2, n) {
    //initialize 3 pointers
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
  
    //traverse both arrays from the end, finding the largest value and assigning it to the end of nums1
    while(p1 >= 0 && p2 >= 0) {
      if(nums1[p1] >= nums2[p2]) {
        nums1[p] = nums1[p1]
        p1--
      }
      else  {
        nums1[p] = nums2[p2]
        p2--
      }
      p--
    }
  
    //copy remaining elements from nums2
    while(p2 >= 0) {
      nums1[p] = nums2[p2]
      p2--
      p--
    }  
  }
  
  
  let array1 = [1,3,5,7,10]
  mergeSortedArrays(array1, 5, [2,4,6,8], 4)
  console.log(array1) // [1,2,3,4,5,6,7,8,10]

  //REFLECTION - failed attempt 1
  //forgot the logic of using 3 pointer approach and traverse the arrays backwards