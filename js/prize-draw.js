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
	let scoreAndName = []

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
			.reduce((acc, curr) => {
				return (acc += curr)
			})
		let sum = name
			.split('')
			.map((x) => x)
			.reduce((acc, curr, i) => {
				// 64 96
				return curr.codePointAt(curr) >= 65 && curr.codePointAt(curr) <= 90
					? (acc += curr.codePointAt(curr) - 64)
					: (acc += curr.codePointAt(curr) - 96)
			}, 0)
		let winningNumber = (sum + length) * weightArr[index]
		console.log(`
		Sum: ${sum}
		Length: ${length}
		Weight: ${weightArr[index]} 
		${(sum + length) * weightArr[index]}
		`)
		// winning number is not being returned in order

		return winningNumber
	})
	// add namesArr name & winning number to scoreAndName arr as an object
	// map namesArr -> add corresponding winning number
	namesArr.map((name, i) => scoreAndName.push({ name, score: score[i] }))
	//console.log(score, namesArr, scoreAndName)

	let sorted = scoreAndName.sort((a, b) => {
		// if score is the same list in alphabetical order
		//if (a === b) console.log(a, b)
		return b.score - a.score
	})
	let smallestNum = sorted[0]
	console.log(sorted)
	// find matching score in score array
	// return name of smallest score
	let spitName = score.map((name, i) =>
		smallestNum === name ? namesArr[i] : ''
	)
	return n > namesArr.length
		? 'Not enough participants'
		: names.length < 1
		? 'No participants'
		: smallestNum.name

	// if names is empty return 'No participants'
	// if n > names 'Not enough participants'
}

console.log(
	rank(
		'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
		[4, 2, 1, 4, 3, 1, 2],
		4
	)
)

const rankBestPractice = (str, weight, n) => {
	let names = str.split(',')
	if (!str.length) return 'No participants'
	if (names.length < n) return 'Not enough participants'
	return names
		.map((name, i) => ({
			name,
			score:
				[...name.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) *
				weight[i],
		}))
		.sort((a, (b) => a.name > b.name))
		.sort((a, (b) => b.s - a.s))[n - 1].name
}
