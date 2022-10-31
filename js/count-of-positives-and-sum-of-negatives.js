/** Count of positives / Sum of negatives
 *
 * Given an array of integers.
 *
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
 *
 * If the input is an empty array or is null, return an empty array.
 */

const countPositivesSumNegatives = input => !input || input.every(x => x == 0)
		? []
		: [
				input.filter(x => x > 0).length,
				input.filter(x => x < 0).reduce((a, b) => (a += b)),
				0
		  ]


console.log(
	countPositivesSumNegatives([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
	])
)
