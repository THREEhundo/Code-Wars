/** Square(n) Sum
 *
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 *
 * For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

//const squareSum = nums =>
//nums.reduce((a, b) => (a !== nums[0] ? (a += Math.pow(a, b)) : ), nums[0])
const squareSum = nums => nums.reduce((a, b) => (a += Math.pow(b, 2)), 0)

console.log(squareSum([1, 2, 2]))
console.log(squareSum([0, 3, 4, 5]))
