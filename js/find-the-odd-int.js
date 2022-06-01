/****************************/
/*** Find the odd int			5/31
/***************************/

/***
 * Given an array of integers, find the one that appears an off number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 *
 ***/

const findOdd = (a) => a.reduce((a, b) => a ^ b)

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
