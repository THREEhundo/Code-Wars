/**
 * How many are smaller than me?
 * Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
 */

const smaller = nums => {
	// iterate nums & return array
	// each index i should have the amount of numebrs that are smaller than arr[i] to the right
	return nums.map((x, i) => {
		if (i === nums.length - 1) return 0
		let sum = 0
		// slice the nums array starting with the index after i
		nums.slice(i).map((y, i) => {
			if (y < x) return (sum += 1)
		})
		return sum
	})
}

console.log(smaller([5, 4, 3, 2, 1]))
console.log(smaller([1, 2, 0]))
