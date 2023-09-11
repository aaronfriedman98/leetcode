//Description - given an array of numbers, a reduce function, and initial value, return a reduced array
//paramas - {number[]} nums, {Function} fn, {number} init
//return - {number}

function customReduce(nums, fn, init) {
    let val = init
    for(let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i] )
    }
    return val
  }
  
  
  const reduceTest = (accum, current) => {
    return accum + current
  }
  
  // function reduceTest(accum, current) {
  //   return accum + current
  // }
  
  console.log(customReduce([1,2,3], reduceTest, 0))
  console.log(' = 6')