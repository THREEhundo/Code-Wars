/** +1 Array
 *
 * Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
 *
 * the array can't be empty
 *
 * only non-negative, single digit integers are allowed
 * Return nil (or your language's equivalent) for invalid inputs.
 */

const BigNumber = require('bignumber.js')

const upArray = arr =>
	arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
		? null
		: new BigNumber(arr.join(''))
				.plus(1)
				.toPrecision()
				.split('')
				.map(Number)

console.log(
	upArray([
		9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7,
		8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1
	])
)
