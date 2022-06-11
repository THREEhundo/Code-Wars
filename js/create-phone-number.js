/****************************/
/*** Sum of Digits/Digital Root			6/9
/***************************/

/***
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 ***/

// take in array
// insert () into the 0 and 4th index
// insert space into 5th index
// insert - into the 9th index
// create variable (string)
// transfer array items into single string
// return string

// join
// toString

// create new array variable
// push items into new arr variable
// at certain index -> push string
const createPhoneNumber = (arr) => {
	arr.unshift('(')
	arr.splice(4, 0, ')')
	arr.splice(5, 0, ' ')
	arr.splice(9, 0, '-')
	return arr.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

const createPhoneNumberBestPractice = (arr) => {
	let format = '(xxx) xxx-xxxx'

	for (let i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i])
	}
	return format
}
