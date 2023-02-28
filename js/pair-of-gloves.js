/*** Pair of Gloves
 *
 * Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
 *
 * Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the
 * same color can form pairs.
 *
 * Examples:
 * input = ["red", "green", "red", "blue", "blue"]
 * result = 2 (1 red pair + 1 blue pair)
 * input = ["red", "red", "red", "red", "red", "red"]
 * result = 3 (3 red pairs)
 *
 */

const numberOfPairs = gloves => {
	let pairs = 0
	let count = gloves.reduce((allColors, currentColor) => {
		const currCount = allColors[currentColor] ?? 0
		return {
			...allColors,
			[currentColor]: currCount + 1
		}
	}, {})

	for (const color in count) {
		pairs += Math.floor(count[color] / 2)
	}
	return pairs
}

const pairs = gloves => {
	let pairs = 0,
		sortedGloves = gloves.reduce((acc, curr) => {
			const currentGlove = acc[curr] ?? 0
			return {
				...acc,
				[curr]: currentGlove + 1
			}
		}, {})

	for (const glove in sortedGloves) {
		pairs += Math.floor(sortedGloves[glove] / 2)
	}

	return pairs
}

console.log(pairs(['red', 'red', 'red', 'red', 'red', 'red', 'blue', 'blue']))
