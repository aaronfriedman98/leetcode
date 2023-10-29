//description - given an int i, return a sequence of strings for each of the numbers up to i. For any number that is divisible by 3 and 5, push "FizzBuzz" to the array, for any number that is divisible by 3 and not 5, push "Fizz" to the array, for any number that is divisible by 5 and not 3, push "Buzz" to the array, for any number that is neither divisible by 3 or 5, push the number itslef to the array
//params - {number} n
//return - {strings[]}


function fizzBuzz(n) {
    let result = []
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz")
      }
      else if(i % 3 === 0) {
        result.push("Fizz")
      }
      else if(i % 5 == 0) {
        result.push("Buzz")
      }
      else {
        result.push(i.toString())
      }
    }
    return result
  }
  
  
  console.log(fizzBuzz(15)) // ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]