/** Pick a Set of First Elements
 *
 * Write a function to get the first element of a sequence.
 * Passing a parameter n will return the first n elements of the sequence.
 *
 * If n == 0 return an emptu sequence []
 */

const first = (arr, n) => {
	n ?? 1
	return n == 0 ? [] : arr.filter((x, i) => i < n)
}
const arr = ['a', 'b', 'c', 'd', 'e']

console.log(first([...arr], 2))
