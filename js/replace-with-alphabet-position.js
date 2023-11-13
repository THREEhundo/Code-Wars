/***
 * Replace with Alphabet Position
 *
 * In this kata you are requred to replace every letter with its position in the alphabet.
 * If anything isn't a letter, ignore it.
 *
 */

// turn into array
// map through the letters
// convert all the letters to lowercase
// a == 97 z == 122
// charCodeAt() - 96
// join(' ')

const alphabetPosition = word =>
	word
		.split('')
		.map(char =>
			char.toLowerCase().charCodeAt(0) <= 122 &&
			char.toLowerCase().charCodeAt(0) >= 96
				? char.toLowerCase().charCodeAt(0) - 96
				: ''
		)
		.filter(Boolean)
		.join(' ')

console.log(alphabetPosition('The sunset'))

console.log(
	alphabetPosition("The sunset sets at twelve o' clock."),
	`
	20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11`
)
//console.log('a'.charCodeAt(0))
//console.log('z'.charCodeAt(0))
