/****************************/
/*** Sort the Odd			5/19
/***************************/

/***
 * You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 ***/

/**
 *
 */

const sortArray = (array) => {
	// filter out all odd numbers
	const odd = array.filter((x) => x % 2).sort((a, b) => a - b)
	// odd.shift() removes first item of array and returns it!
	return array.map((x) => (x % 2 ? odd.shift() : x))
}

console.log(sortArray([5, 8, 6, 3, 4]))

const oddManOut = (arr) => {
	const odd = arr.filter((x) => x % 2).sort((a, b) => a - b)
	return arr.map((x) => (x % 2 ? odd.shift() : x))
}
