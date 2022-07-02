/****************************/
/*** Two Sum 7/1
/***************************/

/***
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value.
 *
 *  The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
 *
 * For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
 *
 * The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
 *
 */

function twoSum(numbers, target) {
	// two numbers in the array that add up to the target
	// loop through the array
	// if the current number in addition to another number in the array equals the target, return the indices of the two numbers
	let numsArr = numbers.reduce((acc, curr, i) => {
		const otherNum = target - curr
		if (numbers.includes(otherNum) && numbers.indexOf(otherNum) !== i) {
			acc.push(i)
			acc.push(numbers.indexOf(otherNum))
		}
		return acc
	}, [])
	return numsArr.slice(0, 2)
}

console.log(twoSum([1234, 5678, 9012], 14690)) // [0, 2]

function code(numbers, target) {
	let reduction = numbers.reduce((acc, curr, i) => {
		const otherNum = target - curr
		if (numbers.includes(otherNum) && numbers.indexOf(otherNum) !== i) {
			acc.push(i)
			acc.push(numbers.indexOf(otherNum))
		}
		return acc
	}, [])
	return reduction.slice(0, 2)
}
