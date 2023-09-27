//description - represent a partially filled sudoku board as nested arrays and return whether the board is correct at that point. (each row, column, and square cannot contain 2 of the same number)
//params - {character[][]} board
//return - {boolean}
//solution - 

function isSudokuValid(board) {
    //check rows
    for(let i = 0; i < 9; i++) {
      let row = board[i]
      let set = new Set()
      for(num of row) {
        if(num !== ".") {
          if(set.has(num)) {
          return false
        }
        set.add(num)
        }
      }
    }
    //check columns
    for(let i = 0; i < 9; i++) {
      let row = board[i]
      let column = board.map(row => row[i])
      let set = new Set()
      for(num of column) {
        if(num !== ".") {
          if(set.has(num)) {
          return false
        }
        set.add(num)
        }
      }
    }
    //check squares
    for(let i = 0; i < 9; i += 3) {
      for(let j = 0; j < 9; j +=3) {
        let square = []
        for(let x = i; x < i+3; x++) {
          for(let y = j; y < j+3; y++) {
            square.push(board[x][y])
          }
        }
        for(let z = 0; z < 9; z++) {
        let set = new Set()
        for(num of square) {
          if(num !== ".") {
            if(set.has(num)) {
              return false
        }
        set.add(num)
        }
      }
    }
      }
    }
    return true
  }
  
  console.log(isSudokuValid([
   ["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]])) // true
  
  console.log(isSudokuValid([
   ["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]])) // false