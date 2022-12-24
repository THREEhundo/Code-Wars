/** Break camelCase
 *
 * Complete the solution so that the function will break up camel casing, using a space between words.
 */

const solution = str =>
	[...str]
		.map(char => (char === char.toUpperCase() ? ` ${char}` : char))
		.join('')

// split
// find uppercase letter char
// insert space
// join & return
