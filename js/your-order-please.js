/****************************/
/*** Your Order Please	6/18
/***************************/

/***
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 *
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 *
 */

const order = (words) => {
	// if words == '' return ''
	let order = []
	let sortedArr = []
	if (words == '') {
		return ''
	}
	words
		.split(' ')
		.map((word) =>
			word
				.split('')
				.map((letter) => (parseInt(letter) ? order.push(letter) : ''))
		)
	words.split(' ').map((word, i) => (sortedArr[order[i] - 1] = word))
	return sortedArr.join(' ')
	// take the number in each string
	// how?
	// map through array -> map array items -> split further -> check for number using parseInt() -> push into array at that position.

	// number == position
	// return string in order
}

order('is2 Thi1s T4est 3a')
