/** Millipede of words
 *
 * The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same.
 *
 * Return true if all words of the set can be combined into one word.
 *
 * Otherwise return false.
 *
 * Input -> Array of 3 to 7 words of random length.
 * No capital letters.
 *
 */

const solution = (words, current = '') => {
	if (words.length === 0) return true
	for (let i = 0; i < words.length; i++) {
		if (
			current.length === 0 ||
			current[current.length - 1] === words[i][0]
		) {
			if (
				solution(
					words.slice(0, i).concat(words.slice(i + 1)),
					current + words[i]
				)
			)
				return true
		}
	}
	return false
}
