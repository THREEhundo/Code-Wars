/****************************/
/*** Duplicate Encoder 7/25
/***************************/

/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
 *
 * Ignore capitalization when determining if a character is a duplicate.
 *
 */

const duplicateEncode = (word) => {
	// each character is === (

	// repeat characters === )

	/**
	 * break up string
	 * turn into an array
	 * map and convert all string to lowercase
	 * for each letter check against other letters in the array for an exact match
	 * use some() on array in map()
	 * if true (
	 * if false )
	 * join the new array
	 * return new string
	 *
	 */
	return word
		.toLowerCase()
		.split('')
		.map((letter, i, word) => {
			return word.some((item, j) => letter === item && i !== j) ? ')' : '('
		})
		.join('')
}

console.log(duplicateEncode('Sammy'))
