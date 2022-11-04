/** Count Charaters in Your String
 *
 * The main idea is to count all the occurring characters in a string.
 * If you have a string like aba, then the result should be {a: 1, b: 2}
 *
 */

const count = str =>
	!str.length
		? {}
		: str.split('').reduce((allChars, char) => {
				const currCount = allChars[char] ?? 0
				return {
					...allChars,
					[char]: currCount + 1
				}
		  }, {})

console.log(count('aba'))
