// * Multiplication Table

/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.
 */

// for of -> subarrays * size * size
//
const multiplicationTable = size => {
	const arr = []
	for (let i = 0; i < size; i++) {
		arr[i] = []
		for (let j = 0; j < size; j++) {
			arr[i][j] = (i + 1) * (j + 1)
		}
	}
	return arr
}

console.table(multiplicationTable(3))

const mTable = size => {
	let result = []
	for (let i = 0; i < size; i++) {
		result[i] = []
		for (let j = 0; j < size; j++) {
			result[i][j] = (i + 1) * (j + 1)
		}
	}
	return result
}

console.log(mTable(3))
