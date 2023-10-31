//description - it takes n steps to climb the stairs, you can either climb 1 or 2 steps at a time, how many variations are there of climbing all of the steps
//params - {number} n
//return - {number}
//solution - Fibonacci sequence method: first check if n is <= 1 and if yes then return 1 (if it is 0 then there is 1 way - do nothing, and if it is one then there is 1 way), create an array to store the number of ways in each step and initialize the length of the array to be n+1, assign 1 to array[0] and array[0] since at those steps we know the solution is only 1 (and starting the loop from these steps will interfere with the algorithm), loop through the array starting from array[2] and assign that index the sum of the 2 index's previous, return array[n]

function climbStairs(n) {
    //check if n is === to 0 or 1
    if(n <= 1) {
      return 1 // if there is 0 or 1 steps, then there is only 1 way
    }
  
    //initialize an array to store all of the different ways for each step
    let ways = new Array(n+1) // we want the index n to represent n
  
    //assign 1 to the first 2 steps of the array
    ways[0] = 1
    ways[1] = 1
  
    //calculate the different ways for each step
    for(let i = 2; i <= n; i++) {
      //for each step, assign the sum of the ways of the 2 previous steps
      ways[i] = ways[i - 1] + ways[i - 2]
    }
  
    return ways[n]
  }
  
  
  console.log(climbStairs(2)) // 2
  console.log(climbStairs(3)) // 3
  console.log(climbStairs(4)) // 5
  console.log(climbStairs(5)) // 8
  