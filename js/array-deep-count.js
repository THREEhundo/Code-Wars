/*** Array Deep Count
 *
 * You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
 *
 */

const deepCount = a =>
	a.reduce(
		(acc, curr) => acc + (Array.isArray(curr) ? deepCount(curr) : 0),
		a.length
	)

console.log(deepCount([1, [2], 3, [4, [5]]]))
