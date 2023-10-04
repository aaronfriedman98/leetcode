//description - convert a string to a 32 bit signed integer 
//params - {string} str
//return - {number}
//solution - remove leading white spaces, determine the sign (negative or positive number), read the numbers until a non-digit char is reached and ignore what comes after, convert the string to an integer if no digits then return 0 (change negative sign if necessary), check if the digit is in range of -2^31 and 2^31 - 1 (if it is above or below then clamp the digit at the minimum or maximum), return the result

function myAtoi(str) {
    // Initialize variables
    let i = 0;
    let sign = 1;
    let result = 0;
  
    // Check for leading white spaces
    while (str[i] === " ") {
      i++;
    }
  
    // Check for sign
    if (str[i] === "-") {
      sign = -1;
      i++;
    } else if (str[i] === "+") {
      i++;
    }
  
    // Read and convert digits
    while (i < str.length && str[i] >= "0" && str[i] <= "9") {
      const digit = parseInt(str[i], 10);
  
      // Check for overflow
      if (result > Math.pow(2, 31) / 10 || (result === Math.pow(2, 31) / 10 && digit > 7)) {
        if (sign === 1) {
          return 2147483647; // Max positive value
        } else {
          return -2147483648; // Min negative value
        }
      }
  
      result = result * 10 + digit;
      i++;
    }
  
    // Clamp the result to the 32-bit signed integer range
    if (result > 2147483647) {
      return sign === 1 ? 2147483647 : -2147483648;
    }
  
    return result * sign;
  }
  
  console.log(myAtoi(" -3445d45")); // -3445
  console.log(myAtoi("2147483648")); // 2147483647
  