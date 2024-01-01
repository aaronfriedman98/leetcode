//description - write a function that takes in a binary representation of an unsigned integer, and return the number of '1' bits it contains (hamming weight).
//params - {number} binaryInt
//return - {number}
//solution - 
//Step 1: convert the binaryInt into a BigInt so that it can handle a large number
//Step 2: initialize var bits that will represent the number of '1' bits
//Step 3: while loop through the bits of the binaryBigInt as long as binaryBigInt is greater than 0n (0)
//Step 4: in each iteration, use bitwise AND to check the least significant bit. (check the least significant int by comparing it to 1n (...1). This will only return '1' if a '1' bit corresponds with a '1' bit. This can only occur if there is a '1' bit at the end of binaryBitInt. If there is, then this will return 1, otherwise it will return 0. This is an effective way to determine whether the least significant int is a '1' bit or '0')
//Step 5: covert that bit to a regular number 
//Step 6: increment bits by that number
//Step 7: discard the least significant number in binaryBigInt
//Step 8: return bits

function hammingWeight(binaryInt) {
    //convert binaryInt into a BigInt
    let binaryBigInt = BigInt(binaryInt)
  
    //initalize bits var to hold the hamming weight
    let bits = 0
  
    //iterate through the bits of binaryBigInt
    while(binaryBigInt > 0n) {
      //use bitwise AND to check the least significant bit and convert it from BigInt to regular int
      let leastSignificantBit = Number(binaryBigInt & 1n)
  
      //increment bits by leastSignificantBit
      bits += leastSignificantBit
  
      //discard the least significant number in binaryBigInt
      binaryBigInt >>= 1n
    }
    return bits
  }
  
  //0b makes the number be treated as a 32-bit signed integer. Otherwise, it will treat is as base-10 and its 32-bit signed integer representation will be much larger.
  console.log(hammingWeight(0b10101010010101111)) // 10
  console.log(hammingWeight(0b1011)) // 3
  
//REFLECTION - failed attempt 1
//had no clue how to deal with binary representations of numbers. Wasn't familiar with using BigInt to handle large numbers with precision. Also wasn't familiar with 0n and 1n and how they are used to represent binary numbers. Also wasn't familiar with bitwise AND and how it can be used to check the least significant bit. Also wasn't familiar with the >> operator and how it can be used to discard the least significant bit.  