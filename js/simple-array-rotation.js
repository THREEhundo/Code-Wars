/***
 * Simple Array Rotation
 *
 * In this Kata, you will be given an array and your task will be to determine if an array is in ascending or descending order and if it is rotated or not.
 *
 * Consider the array [1,2,3,4,5,7,12].
 * This array is sorted in Ascending order. If we rotate this array once to the left, we get [12,1,2,3,4,5,7] and twice-rotated we get [7,12,1,2,3,4,5].
 * These two rotated arrays are in Rotated Ascending order.
 *
 * Similarly, the array [9,6,5,3,1] is in Descending order, but we can rotate it to get an array in Rotated Descending order: [1,9,6,5,3] or [3,1,9,6,5] etc.
 *
 * Arrays will never be unsorted, except for those that are rotated as shown above. Arrays will always have an answer, as shown in the examples below.
 *
 * solve([1,2,3,4,5,7]) = "A" -- Ascending
 * solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
 * solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
 * solve([9,8,7,6]) = "D" -- Descending
 * solve([5,9,8,7,6]) = "RD" -- Rotated Descending
 */

// check to see if ascending
// check to see if descending
// check to see if rotated ascending
// check to see if rotated descending
// return proper string

const solve = arr => {
	let ascending = [...arr].sort((a, b) => a - b)
	let descending = [...arr].sort((a, b) => b - a)

	if (arr.join() === ascending.join()) return 'A'
	if (arr.join() === descending.join()) return 'D'

	for (let i = 1; i < arr.length; i++) {
		if ([...arr.slice(i), ...arr.slice(0, i)].join() === ascending.join())
			return 'RA'
		if ([...arr.slice(i), ...arr.slice(0, i)].join() === descending.join())
			return 'RD'
	}
}

console.log(solve([1, 2, 3, 4, 5, 7]), 'A')
//console.log(solve([7, 1, 2, 3, 4, 5]), 'RA')
//console.log(solve([2, 3, 4, 5, 7, 12]), 'A')
//console.log(solve([7, 12, 1, 2, 3, 4, 5]), 'RA')
//console.log(solve([4, 5, 6, 1, 2, 3]), 'RA')
//console.log(solve([9, 8, 7, 6, 5]), 'D')
//console.log(solve([5, 9, 8, 7, 6]), 'RD')
//console.log(solve([6, 5, 9, 8, 7]), 'RD')
//console.log(solve([9, 6, 7]), 'RA')
//console.log(solve([10, 12, 11]), 'RD')
//console.log(solve([13, 10, 11]), 'RA')
