/*** Split Strings
 * Complete the solution so that it splits the string into pairs of two characters.
 *
 * If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 */

const solution = (str) => {
	let doubles = []
	let letters = ''
	let arr = str.split('').map((letter, i, arr) => {
		console.log(i % 2)
		if (i % 2 == 0) {
			letters = letter
		}
		if (i % 2 == 1) {
			letters += letter
			doubles.push(letters)
		}
		if (i == arr.length - 1) doubles.push((letters += '_'))
	})
	return doubles
}
console.log(solution('abc'))
