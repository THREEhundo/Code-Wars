/*** Selective Array Reversing
 *
 * Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.
 *
 */

const selReverse = (arr, length) => {
	if (length == 0) return arr
	let result = []

	for (let i = 0; i < arr.length; i += length) {
		result.push(...arr.slice(i, i + length).reverse())
	}

	return result
}

console.log(selReverse([1, 2, 3, 4], 2))
// result -> [2, 1, 4, 3]
// result with console.log(i += length) in the for loop -> [4, 3]
