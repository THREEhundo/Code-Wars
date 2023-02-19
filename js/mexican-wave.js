/*** Mexican Wave
 *
 * In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
 *
 * You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 */

const wave = str =>
	[...str]
		.map(
			(char, i) => str.slice(0, i) + char.toUpperCase() + str.slice(i + 1)
		)
		.filter(elem => elem != str)

console.log('wave', wave('gap'))
