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

	// How to add rank to letter?
	// for loop & key code
	// loop through name
	// loop through key code?
	// a == 97 A == 65
	// z == 122 Z == 90
	let namesArr = names.toString().split(',')
	let score = namesArr.map((name, index) => {
		let length = name.length

		let letterScore = name
			.split('')
			.map((letter, i) => {
				return letter.codePointAt(name[i]) >= 65 &&
					letter.codePointAt(name[i]) <= 90
					? letter.codePointAt(name[i]) - 64
					: letter.codePointAt(name[i]) - 96
			})
			.reduce((acc, curr) => (acc += curr))
		let place
		let sum = name
			.split('')
			.map((x) => x)
			.reduce((acc, curr, i) => {
				// 64 96

				return curr.codePointAt(curr) >= 65 && curr.codePointAt(curr) <= 90
					? (acc += curr.codePointAt(curr) - 64)
					: (acc += curr.codePointAt(curr) - 96)
			}, 0)
		return (sum + length) * weightArr[index]
	})

	let sorted = score.sort((a, b) => a - b)
	let smallestNum = sorted[0]
	// find matching score in score array
	// return name of smallest score
	let spitName = score.map((name, i) =>
		smallestNum === name ? namesArr[i] : ''
	)
	return n > namesArr.length
		? 'Not enough participants'
		: names.length < 1
		? 'No participants'
		: spitName[0]

	// if names is empty return 'No participants'
	// if n > names 'Not enough participants'
}

console.log(
	rank(['COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH'], [1, 4, 4, 5, 2, 1], 4)
)
console.log(
	rank(
		'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
		[4, 2, 1, 4, 3, 1, 2],
		4
	)
)
