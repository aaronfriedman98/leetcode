//description - given a number n that represents the amount of stairs in a staircase, you can either climb 1 or 2 steps at a time, how many variations are there of climbing all of the steps.
//params - {number} n
//return - {number}
//solution - Fibonacci Sequence:
//Step 1: first check if n is === 0, and if yes then return 0. Then check if n is === 1 and if yes then return 1.
//Step 2: initialize var ways as an array with a set length of (n + 1). This array will be used to store all of the variations for each corresponding step. We set the array length to n + 1 so that we can ignore ways[0] and the arrays index will directly correspond to the number of steps (just makes it more readable).
//Step 3: set ways[1] to 1, and ways[2] to 2. There is only 1 variation for step 1 and only 2 variations for step 2. This will act as the base case for solving the rest of the steps dynamically, based on the Fibonacci Sequence.
//Step 4: write a for loop that runs up to and including n, starting from 3 (since index 1 and index 2 are already filled and are the base case).
//Step 5: in each iteration, to calculate the amount of variations for each stair, find the sum of ways[i - 1] and ways[i - 2], and push this value to ways[i]
//Step 6: return ways[n]

function climbStairs(n) {
    //simple answers
    if(n === 0) {
      return 0
    }
    if(n === 1) {
      return 1
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
  
  //REFLECTION - failed attempt 1
  //forgot the logic of using the Fibonacci Sequence to solve this problem