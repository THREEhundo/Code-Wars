/***	Double Char
 *
 * Given a string, youu have to return a string in which each character (case-sensitive) is repeated once.
 *
 */

const doubleChar = (str) =>
	str
		.split('')
		.map((letter) => letter + letter)
		.join('')

console.log(doubleChar('String'))
