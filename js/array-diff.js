/****************************/
/*** Descending Order 			5/15
/***************************/

/***
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 *
 * It should remove all values form list a, which are present in list b keeping their order.
 * arrayDiff([1,2], [1]) === 2
 *
 * If a value is present in b, all of its occurences must be removed from the other:
 * arrayDiff([1,2,2,2,3], [2]) === [1,3]
 ***/

const array_diff = (arr, arr1) => {
	const result = []
	if (arr.length === 0) return arr
	if (arr1.length === 0) return arr
	arr.map((item) => {
		// search arr
		if (arr.includes(item) && !arr1.includes(item)) result.push(item)
		// search arr1
		arr1.map((item1) => {
			if (!arr.includes(item1)) {
				result.push(item)
			}
		})
	})
	return result
}

console.log(array_diff([3, 4], [3]))

const array_diff_best_practice = (a, b) => a.filter((e) => !b.includes(e))

// find the same numbers
// iterate through array A
// check against every item in array b
// if the numbers do not match push to result array
// if the numbers match do nothing
