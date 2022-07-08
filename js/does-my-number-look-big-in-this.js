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
// ! third argument in array methods is ARRAY!!!
// ! no need to store array in variable, just use array argument!

const narcissistic = (val) =>
	val
		.toString()
		.split('')
		.reduce((acc, curr, arr) => (acc += Math.pow(curr, arr.length)), 0) === val

console.log(narcissistic(153))
