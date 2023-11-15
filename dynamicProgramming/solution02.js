//description - given an array of numbers that represent prices of a stock for each day of the week, return the maximum profit that could have been made buying and selling this stock
//params - {number[]} prices
//return - {number}
//solution - initialize a var to represent the best time to have bought the stock and assign prices[i] to it (the smallest number in the array before the largest number in the array), initialize a var to represent potential profit that will check the profit that could have been made selling on each day, initialize a var to represent the maximum profit to be made that will be returned, loop through the array and in each iteration find the minimum number and calculate the potential profit and find the maximum profit by comparing the maximum profit to the potential profit, return the maximum profit

function maxProfit(prices) {
    let min = prices[0]
    let potentialProfit = 0
    let maxProfit = 0
    for(let i = 1; i < prices.length; i++) {
      //update the minimum number if the following number is larger than the current minimum
      min = Math.min(min, prices[i])
      //find the total profit (or no profit) that will be made being sold on the current day
      potentialProfit = prices[i] - min
      // update the max profit if the potential profit is higher than the current
      maxProfit = Math.max(maxProfit, potentialProfit)
    }
    return maxProfit
  }
  
  console.log(maxProfit([2, 6, 3, 6, 8, 9])) // 7
  console.log(maxProfit([9, 7, 5, 4, 3])) // 0