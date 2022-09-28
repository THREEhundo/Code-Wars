//*** Framed Reflections ***//

/**
 * You are given a message that you choose to read in a mirror.
 *
 * Return what you would see, compelte with mirror frame.
 */

const mirror = text => {
	//* if there's a space split
	//* count letters & space on both sides
	//* add star at the beginning and end
	//* second word, new line
	let w = ''
	const t = text.split(' ')
	let mapped = t
		.map((word, i) => {
			let starLength = word.length + 2
			let star = '*'
			let repeatingStars = star.repeat(starLength + 2)
			if (i == 0) {
				return `${repeatingStars}
* ${word} *`
			}
			if (i != 0 && i != t.length - 1) {
				console.log(i)
				return (w += `* ${word} *`)
			}
			if (i == t.length - 1) {
				return (w += `* ${word} *
${repeatingStars}`)
			}
		})
		.join('\n')
	return mapped
}

console.log(mirror('Hello World'))
console.log(`first
second`)
