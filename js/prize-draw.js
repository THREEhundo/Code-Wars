/****************************/
/*** Prize Draw	7/8
/***************************/

/**
 * To participate in a prize draw each one give his/her name.
 *
 * Each letter of a firstname has a value which its rank in the English alphabet.
 *
 * The length of the firstname is added to the sum of these ranks
 *
 * An array of random weights is linked to the firstnames and each sum
 *
 * An array of random weights is linked to the firstnames and each sum is ultiplied by its corresponding weight to get what they call a winning number
 *
 * Task: return the firstname of the participant whose rank is 1
 *
 * Notes: If names are empty return 'No participants'
 * If rank is greater than the number of participants then return 'Not enough participants.'
 */

const rank = (names, weightArr, n) => {
	// split names
	// assign rank to each letter -> if letter is A or a rank is 1
	// length of name +sum of ranks
	// multiply sum with corresponding rank
	// rank names --> if same score rank in alphabetical order
	// reduce to first name
	// return first ranked

	let namesArr = names.split(',').map((name) => {
		let letters = name.split('')
	})

	// if names is empty return 'No participants'
	// if n > names 'Not enough participants'
}
