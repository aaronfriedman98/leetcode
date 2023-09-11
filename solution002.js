// @problem - create a function last() that can be used for any array and //            it will always returns the last element. If 
//            there are no elements, return -1
// @Params - none
// @return - {last element}
// @solution - simply return the last element of the array with
//             arr.length - 1

//Brute force solution
// @time complexity - O(1)
// Array.prototype.last = function(){
//     if(this.length === 0) {
//       return -1
//     }
//     else {
//       return this[this.length - 1]
//     }
//   }


//es6 solution
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1]
}

  
  
  let arr1 = [1,2,3]
  let arr2 = ['test', 'testing', 'tested']
  let arr3 = []
  
  console.log(arr1.last()  + ' = 3')
  console.log(arr2.last() + ' = tested')
  console.log(arr3.last() + ' = -1')
  