/**
 * Grouping in String
 *
 * In this kata you have to find whether same elements of the string are grouped together.
 *
 */

const isConsecutive = str => {
	const seen = new Set()
	let latest

	for (const char of str)
		if (!seen.has(char)) seen.add((latest = char))
		else if (latest !== char) return false

	return true
}
