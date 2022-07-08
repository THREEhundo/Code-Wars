/****************************/
/*** Does My Number Look Big in This?			7/7
/***************************/

/***
 * A narcissistic number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
 * In this Kata, we will restrict ourselves to decimal (base 10)
 * Ex. -> 153 (3 digits)
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 ***/

// convert to string
// split into array
// iterate through each num using reduce
// Get power using array length
const narcissistic = (val) => {
	let valArr = val.toString().split('')
	let arrTotal = valArr.reduce(
		(acc, curr) => (acc += Math.pow(curr, valArr.length)),
		0
	)
	return val === arrTotal
}

console.log(narcissistic(153))
