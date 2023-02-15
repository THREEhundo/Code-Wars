/*** Title Case
 *
 * Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
 * The list of minor words will be given as a string with each word separated by a space.
 * Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
 *
 */

const titleCase = (title, minorWords = '') => {
	if (title == '') return ''
	const minorArray = minorWords.split(' ')
	const str = title.split(' ')
	return str
		.map((word, i) =>
			i == 0 ||
			!minorArray.some(x => x.toLowerCase() == word.toLowerCase())
				? word[0].toUpperCase() + word.slice(1).toLowerCase()
				: i != 0 &&
				  minorArray.some(x => x.toLowerCase() == word.toLowerCase())
				? word.toLowerCase()
				: ''
		)
		.join(' ')
}
console.log(titleCase('THE WIND IN THE WILLOWS', ''))
