/****************************/
/*** Find the Unique Number			5/16
/***************************/

/***
 * There is an array with some numbers.
 *
 * All numbers are equal except for one. Try to find it!
 *
 ***/

const findUniq = arr => {
	let value
	let nums = arr.reduce((allNums, num) => {
		if (!allNums[num]) {
			allNums[num] = 0
		}
		allNums[num]++

		return allNums
	}, {})
	console.log(nums)
	const v = Object.entries(nums).forEach(([key, val]) => {
		if (val === 1) {
			console.log(key, val)

			return (value = key)
		}
	})
	return Number(value)
}
console.log(findUniq([0, 2, 0, 0]))

function findUniq1(arr) {
	arr.sort((a, b) => a - b)
	return arr[0] == arr[1] ? arr.pop() : arr[0]
}
