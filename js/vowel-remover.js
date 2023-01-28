/*** Vowel Remover
 *
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 */

const shortcut = str => {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	str.split('')
		.map(char => (vowels.some(vowel => vowel === char) ? '' : char))
		.join('')
}
