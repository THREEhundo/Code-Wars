/** Even Numbers in Arrays
 *
 * Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order).
 *
 * The original array will be not empty and will contain at least "number" even numbers.
 */

const evenNumbers = (arr, num) => {
	const evenNums = arr.filter(num => num % 2 == 0)
	const cutLength = evenNums.length - num
	return evenNums.length > num ? evenNums.slice(cutLength) : evenNums
}

// 4 nums 3 nums cut off 1 start at index 1 -> -1
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
