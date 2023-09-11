// @description - create a function that takes a number and returns a                        counter function that initially returns the number and                     then adds 1 to the number every subsequent time the                         counter function is called
// @pramas - {number} num
// @return - {Function} counter
// @solution - closure - nesting a function that retains the input number even after the outer function returns


function createCounter(num) {
    let counter = num
    return function () {
      return counter++
    }
  }
  
  const counter = createCounter(3)
  
  console.log(counter())
  console.log(counter())
  console.log(counter())