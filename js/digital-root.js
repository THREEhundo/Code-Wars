/****************************/
/*** Sum of Digits/Digital Root			6/9
/***************************/

/***
 * Digit root is the recursie sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 ***/

// split number if length > 1
// return sum
// if length > 1
// split again
// return sum

const digital_root = (n) => {
	let num = (n) =>
		n
			.toString()
			.split('')
			.map((x) => parseInt(x))
			.reduce((acc, curr) => (acc += curr), 0)
	let firstNum = num(n)
	return firstNum > 9 ? num(firstNum) : firstNum
}

console.log(digital_root(456))
