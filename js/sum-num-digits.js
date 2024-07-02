/**
 * Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
 */

const sumDigits = num => {
	// Take the absolute value of the number
	num = Math.abs(num)

	let sum = 0

	// Continue loop while num is not 0
	while (num > 0) {
		// Add the last digit to sum
		sum += num % 10
		// Remove the last digit from num
		Math.floor(num / 10)
	}

	return sum
}

console.log(sumDigits(-10))
