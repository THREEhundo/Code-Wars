/*** Convert number to reversed array of digits
 *
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

const digitize = (n) =>
	n
		.toString()
		.split('')
		.reverse()
		.map((x) => Number(x))

console.log(digitize(34567))
