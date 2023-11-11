/***
 * Write a function that takes a single string as an argument.
 * The function must return an ordered list containing the indexes of all capital letters in the string.
 *
 */

// Turn string into array
// map each letter
// if codeChar is inbetween 65-90 return the index

const capitals = word => {
	let capArr = []
	word.split('').map((char, i) =>
		word.charCodeAt(i) >= 64 && word.charCodeAt(i) <= 90
			? capArr.push(i)
			: ''
	)
	return capArr
}

console.log(capitals('CodEWaRs'), [0, 3, 4, 6])
