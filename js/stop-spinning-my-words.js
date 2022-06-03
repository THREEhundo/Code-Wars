/****************************/
/*** Stop Spinning My Words			6/3
/***************************/

/***
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
 ***/

// split the string & seperate by case
// conditional
// map => if array item > 5 reverse
// pop off the end & push onto new var
// join
const spinWords = (string) =>
	string
		.split(' ')
		.map((string) =>
			string.length > 4 ? string.split('').reverse().join('') : string,
		)
		.join(' ')

console.log(spinWords('Hey fellow warriors'))
