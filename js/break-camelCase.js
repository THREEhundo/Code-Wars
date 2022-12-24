/** Break camelCase
 *
 * Complete the solution so that the function will break up camel casing, using a space between words.
 */

const solution = str =>
	str
		.split('')
		.map(x => (x === x.toUpperCase() ? ` ${x}` : x))
		.join('')

// split
// find uppercase letter char
// insert space
// join & return
