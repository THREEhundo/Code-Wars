/*** Remove the Parentheses
 *
 * Remove the parentheses
 *
 * In this kata you are given a string for example:
 * "example(unwanted thing)example"
 *
 * Your task is to remove everything inside the parentheses as well as the parentheses themselves.
 *
 * The example above would return:
 * "exampleexample"
 *
 * Notes
 *
 * Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
 * There can be multiple parentheses.
 * The parentheses can be nested.
 *
 */

const removeParentheses = s => {
	let result = ''
	let count = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			count++
		} else if (s[i] === ')') {
			count--
		} else if (count === 0) {
			result += s[i]
		}
	}

	return result
}

console.log(
	removeParentheses('hello example (words(more words) here) something')
)
