/** String Transformer
 *
 * Given a string, return a new string that has transformed based on the input:
 *
 * Change case of every character, ie. lower case to upper case, upper case to lower case.
 *
 * Reverse the order of words from the input.
 *
 * Note: You will have to handle multiple spaces, and leading/trailing spaces.
 */

const stringTransformer = str =>
	str
		.split(' ')
		.reverse()
		.map(word =>
			word
				.split('')
				.map(ltr =>
					ltr.toUpperCase() == ltr
						? ltr.toLowerCase()
						: ltr.toUpperCase()
				)
				.join('')
		)
		.join(' ')

console.log(stringTransformer('Example Input'))
