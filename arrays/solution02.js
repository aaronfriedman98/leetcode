//description - Given an array of nums, where each number represents the price of a stock on each day of the week, return the maximum amount of profit that could've been made buying and selling this stock for those given days. The stock may be bought and sold multiple times and it may be bought and sold on the same day.
//params - {number[]} prices
//return - {number}
//solution - 
//Step 1: initialize var maxProfit 
//Step 2: loop through prices with a for loop, ending with prices.length - 1
//Step 3: anytime i is < i + 1, find the difference and add that to maxProfit
//Step 4: return maxProfit


function maxProfit(prices) {
  let maxProfit = 0
  for(let i = 0; i < prices.length - 1; i++) {
    if(prices[i] < prices[i + 1]) {
      let difference = prices[i + 1] - prices[i]
      maxProfit += difference
    }
  }
  return maxProfit
}

console.log(maxProfit([1,3,2,4,6,5,9])) // 10
console.log(maxProfit([1,2,3,4,5])) // 4
console.log(maxProfit([5,4,3,2,1])) // 0
console.log(maxProfit([2,6,1,5,7,8]))// 11
console.log(maxProfit([3,1,5,6,4,22,4])) // 23

//Reflection - success Attempt 1
//made a small mistake initially and instead of comparing the numbers within the array (array[i]), I compared the the actual index's (i). But quickly realized the problem and got the correct solution.  

  
  
  
  