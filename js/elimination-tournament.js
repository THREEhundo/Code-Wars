/****************************/
/*** Elimination Tournament		6/17
/***************************/

/***
 * In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.
 *
 * During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.
 *
 * At the end of the competition, return the results of all the rounds in the form of array of arrays.
 *
 */

// reduce
// pit every 2 numbers
// larger number gets pushed into array
// if odd amount -> last number becomes new array first number
// push array

const tourney = (arr) => {
	if (arr.length === 1) [arr]

	// if length is odd, return last item
	// if length is even, create new array
	let next = arr.length % 2 ? arr.slice(-1) : []

	// index starts at 0
	// run unless i is greater than 1 less then the length
	// jump 2 indexes ahead
	for (let i = 0; i < arr.length - 1; i += 2) {
		// next starts with 1 number or an empty array
		// Math.max finds the greatest value
		// push into next array
		next.push(Math.max(arr[i], arr[i + 1]))
	}

	// concats function recursively until there is only 1 item in array
	return [arr].concat(tourney(next))
}
