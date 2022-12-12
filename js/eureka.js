/**
 * Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
 *
 * The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
 *
 * What's the use of saying "Eureka"?
 *
 * Because this sum gives the same number.
 *
 * In effect: 89 = 8^1 + 9^2
 *
 * The next number in having this property is 135.
 *
 * See tgus property again: 135 = 1^1 + 3^2 + 5^3
 *
 * We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
 *
 */

const sumDigPow = (a, b) => {
	// create empty array
	// loop a - b
	// if 1 - 9 -> include in array
	// if 10+ seperate by digit & ^ by its place
	// push to array
	let arr = []
	for (let i = a; i <= b; i++) {
		let str = i.toString()
		console.log(i)
		if (str.length == 1) {
			arr.push(Math.pow(i, 1))
		}
		if (str.length > 1) {
			let reduced = str
				.split('')
				.reduce((acc, curr, i) => (acc += Math.pow(curr, i + 1)), 0)
			if (reduced == i) arr.push(reduced)
		}
	}
	return arr
}

console.log(sumDigPow(1, 100))
