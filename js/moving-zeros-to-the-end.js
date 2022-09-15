//* Moving Zeros to the End *//
/**
 * Write an algorithm that takes an array and moves all of the zeroes to the end, preserving the order of the other elements.
 */

const moveZeros = arr => {
	// find index of zero's
	// store in variable
	//remove the zeros
	// push to end of new array
	let zArr = []
	let reorder = []
	arr.map(x =>
		x !== 0 ? (reorder = [...reorder, x]) : (zArr = [...zArr, x])
	)
	return [...reorder, ...zArr]
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))

// *** Best practices
const move = arr => {
	let x = arr.filter(x => x !== 0)
	let y = arr.filter(y => y === 0)

	return x.concat(y)
}

console.log(move([0, 2, 2, 0, 2]))
