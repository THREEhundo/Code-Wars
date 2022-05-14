/****************************/
/*** Sum of the first nth term of Series?		5/14
/***************************/

/***
 * Your task is to write a function which returns the sum of following series upto nth term (parameter)
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 *
 * Rules:
 *
 * You need to round the answer to 2 decimal places and return it as a string.
 *
 * If the fiven value is 0 then it should return 0.00
 * You will only be given Natural Numbers as arguments.
 */

// xn−1+2xn−2+3xn−3+4xn−4+⋯+nxn−n?

const SeriesSum = (n) => {
	// create a for loop
	// use index for the pow
	// use n for x
	// Math.round() answer
	// if given 0 return 0
	for (let i = 0, s = 0; i <= n; i++) {
		s += 1 / (1 + i * 3)
	}

	return s.toFixed(2)
}
