//description - given a multidimensional array representing a 3x3 matrix containing numbers, rotate the square clockwise, in place
//params - {numbers[][]} matrix
//return - {numbers[][]}
//solution - transpose the matrix (swap all of the elements across the main diagnal - top left until the bottom right), then reverse each inner array

function rotate(matrix) {
    //transpose the matrix
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < i; j++) {
        let temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
    //reverse each row
    for(let i = 0; i < matrix.length; i++) {
      matrix[i].reverse()
    }
    return matrix
  }
  
  console.log(rotate([[1,2,3],
                      [4,5,6],
                      [7,8,9]]))
                   //[[7,4,1],
                   // [8,5,2],
                   // [9,6,3]]