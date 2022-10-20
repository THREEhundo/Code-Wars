/** Sum of Array Singles
 *
 * In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
 * Your task will be to return the sum of the numbers that occur only once.
 *
 * For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
 * Every other number occurs twice.
 */

const repeats = arr =>
	arr
		.filter(x => arr.indexOf(x) == arr.lastIndexOf(x))
		.reduce((count, num) => (count += num), 0)

console.log(repeats([4, 5, 7, 5, 4, 8]))
