/**
 * Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.
 */

const sumNoDuplicates = numbers => {
	// Object to count occurrences of each number
	const count = {}

	// First pass: Count occurrences
	for (const num of numbers) {
		count[num] = (count[num] || 0) + 1
	}

	// Second pass: Sum numbers that appear only once
	let sum = 0
	for (const num of numbers) {
		if (count[num] === 1) sum += num
	}

	return sum
}

console.log(sumNoDuplicates([3, 4, 3, 6])) // Should output 10 (4 + 6)
console.log(sumNoDuplicates([1, 10, 3, 10, 10])) // Should output 4 (1 + 3)
console.log(sumNoDuplicates([1, 2, 3])) // Should output 6 (1 + 2 + 3)
console.log(sumNoDuplicates([1, 1, 1, 1])) // Should output 0
console.log(sumNoDuplicates([5, 17, 18, 11, 13, 18, 11, 13])) // Should output 22 (5 + 17)
//
//function sumNonRepeated(numbers) {
//	// Object to count occurrences of each number
//	const count = {}
//
//	// First pass: Count occurrences
//	for (const num of numbers) {
//		count[num] = (count[num] || 0) + 1
//	}
//
//	// Second pass: Sum numbers that appear only once
//	let sum = 0
//	for (const num of numbers) {
//		if (count[num] === 1) {
//			sum += num
//		}
//	}
//
//	return sum
//}

// Test cases
