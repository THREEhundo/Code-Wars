/***
 * Reverse Words
 * Complete the function that accepts a string parameter, and reverses each word in the string.
 * All spaces in the string should be retained.
 */

// split string by space
// map each word
// reverse string
// join
// return new string
const reverseWords = (str) =>
	str
		.split(' ')
		.map((word) => {
			return word.split('').reverse().join('')
		})
		.join(' ')

console.log(reverseWords('sihT si na !elpmaxe'))
