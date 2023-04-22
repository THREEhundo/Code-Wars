/**
 * Detect Pangram
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

const isPangram = s => {
	const alphabet = new Set([])
	const lowerCase = s.toLowerCase()

	for (let char of lowerCase) {
		if (char >= 'a' && char <= 'b') alphabet.add(char)
	}

	return alphabet.size == 26
}

console.log(isPangram(`Cwm fjord bank glyphs vext quiz`))
