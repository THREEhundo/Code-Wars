/**
 * Exes and Ohs
 *
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
 * The string can contain any char.
 *
 */

const XO = str => {
	let arr = str.toLowerCase().split('')

	if (!arr.includes('x') && !arr.includes('o')) return true
	let count = arr.reduce((allStr, str) => {
		const currCount = allStr[str] ?? 0
		return {
			...allStr,
			[str]: currCount + 1
		}
	}, {})

	return count.x === count.o
}

console.log(XO('xo'))
