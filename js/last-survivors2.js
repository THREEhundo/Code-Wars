/** Last Survivors Ep.2
 *
 * Substitute two equal letters by the next letter of the alphabet (two letters convert to one):
 *
 * ex - "aa" => "b", "bb" => "c", .. "zz" => "a".
 *
 * The equal letters do not have to be adjacent.
 *
 * Repeat this operation until there are no possible
 * substitutions left.
 * Return a string.
 */

const lastSurvivors = str => {
	const chars = [...str]
	function getNextChar(char) {
		if (char === 'z') return 'a'
		const charCode = char.charCodeAt(0)
		return String.fromCharCode(charCode + 1)
	}
	for (let i = 0; i < chars.length; i++) {
		for (let j = i + 1; j < chars.length; j++) {
			if (chars[i] === chars[j]) {
				chars[i] = getNextChar(chars[i])
				chars.splice(j, 1)
				i = -1
				break
			}
		}
	}
	return chars.join('')
}

// search for char
// if found -> add next char & slice both
// repeat
