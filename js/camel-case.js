/****************************/
/*** Convert String to Camel Case	6/27
/***************************/

/***
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 *
 * The first word within the output should be capitalized only if the original word was capitalized
 *
 */

const camelCase = (str) => {
	// split
	// keep casing of first word
	// change casing of every other word
	let splitter
	str.find('-') ? (splitter = str.split('-')) : (splitter = str.split('_'))
	return splitter
		.map((word, i) => {
			if (i != 0) return word.charAt(0).toUpperCase() + word.slice(1)
			if (i == 0) return word
		})
		.join('')
}
