/***
 * Almost Even
 * We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.
 *
 * Complete the function so that it returns an array of integers representing the parts.
 * If the input number is too small to split it into requested amount of parts, the additional parts should have value 0.
 * Ignoring the order of the parts, there is only one valid solution for each input to your function!
 */

const splitInteger = (num, parts) => {
	/**
	 * get remainder
	 * get whole number of number divided evenly into parts
	 * combine 2 arrays
	 * first is a new array consisting parts - remainder and fill with int
	 */

	const remainder = num % parts
	const base = Math.floor(num / parts)

	return [
		...new Array(parts - remainder).fill(base),
		...new Array(remainder).fill(base + 1)
	]
}

console.log(splitInteger(20, 6))
