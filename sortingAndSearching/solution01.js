//description - given 2 non-decreasing arrays of numbers and numbers representing the length of both arrays, merge the arrays as a non-decreasing array, but dont return a new array, rather modify the first array
//params - {numbers[]} nums1, {number} len1, {numbers[]} nums2, {number} len2
//return - {void} (modify nums1)
//solution - use a 3 pointer approach: initialize p1 that will traverse nums1 and p2 that will traverse nums2 and p that will be used to place the values in the correct position of nums1, loop through the array as long as nums1 and nums2 still have values, in each iteration starting from the end of both arrays compare the values of each to find the larger value and copy that value into nums1[p] and then decrement whichever array had the largest value, once one of the arrays runs out of values and the while loop ends write another while loop that checks which array didnt run out and copys the rest of the elements into nums1

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