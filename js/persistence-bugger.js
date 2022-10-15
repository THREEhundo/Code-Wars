/**
 * Persistence Bugger
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 */

const persistence = num => {
	let turn = 0

	while (num > 9) {
		turn += 1
		num = num
			.toString()
			.split('')
			.reduce((acc, curr) => acc * curr)
	}
	return turn
}

console.log(persistence(6174932))
