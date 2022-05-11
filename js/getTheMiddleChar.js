/****************************/
/*** Get the Middle Character			4/13
/***************************/

/***
 * You are going to be given a word.
 * Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 */

const getMiddle = (s) => {
	// split string
	let charArr = s.split('')
	// get length
	let length = charArr.length
	// even -> return middle 2 chars
	if (length % 2 === 0) {
		let middleEnd = length / 2 + 1
		let middleStart = length / 2 - 1
		let middle = charArr.slice(middleStart, middleEnd)
		return middle.join('')
	}
	// odd -> return middle char
	if (length % 2 !== 0) {
		let middle = Math.floor(length / 2)
		return charArr[middle]
	}
}
// BEST PRACTICE
function getMiddleBestPractice(s) {
	var middle = s.length / 2
	return s.length % 2
		? s.charAt(Math.floor(middle))
		: s.slice(middle - 1, middle + 1)
}
