/****************************/
/*** Find the missing letter	6/19
/***************************/

/***
 * Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
 *
 * You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.

 *
 * The array will always contain letters in only one case.
 *
 */

//const findMissingLetter = (arr) => {
// alphabet arr
// lowercase arr
// uppercase arr
// compare the 2 arrays
// must start iteration at where arr starts
// return missing letter
//}

// make a copy of the alphabet array
// map -> if arr item == alpha item
// copy the items from that point until length of arr
// compare alpha to arr
// return difference

const findMissingLetter = (arr) => {
	// get first character code
	let i = arr[0].charCodeAt()
	// map character codes
	// if the character code doesnt match arr[x]
	arr.map((x) => (x.charCodeAt() == i ? i++ : i))
	// return the string of that character code
	return String.fromCharCode(i)
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
