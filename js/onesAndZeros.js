/****************************/
/*** Ones and Zeros		5/3
/***************************/

/***
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 *
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 *
 * However, the arrays can have varying lengths.
 */

// !BEST PRACTICES
const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2)
