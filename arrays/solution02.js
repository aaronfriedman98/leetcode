//description - given an array of ints that represent stock prices for a single stock. Each element represents the stock price for that day. Return the maximum amount of profit one could have made through buying and selling the stock throughout the number of days (elements)
//params - {numbers[]} prices
//return - {number}
//solution - loop through the array, compare i and i + 1, if i is greater then move on, if i is smaller, then find the difference betweeen them and add that number to the profit

function maxProfit(prices) {
    let profit = 0
    for(let i = 0; i < prices.length - 1; i++) {
      if(prices[i] < prices[i + 1]) {
        profit += prices[i + 1] - prices[i]
      }
    }
    return profit
  }
  
  console.log(maxProfit([1,2,3,4,5])) // 4
  console.log(maxProfit([5,4,3,2,1])) // 0
  console.log(maxProfit([2,6,1,5,7,8]))// 11
  console.log(maxProfit([3,1,5,6,4,22,4])) // 23
  
  
  
  