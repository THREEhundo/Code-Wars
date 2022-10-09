// * Highest & Lowest

/**
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 */

const highAndLow = a => {
	let nums = a.split(' ')
	let getMax = (a, b) => Math.max(a, b)
	let getMin = (a, b) => Math.min(a, b)
	let arrMax = nums.reduce(getMax, -100000)
	let arrMin = nums.reduce(getMin, 100000)
	return `${arrMax} ${arrMin}`
}
console.log(highAndLow('1 2 3 4 5'))

const highLow = a => {
	nums = a.split(' ')
	return `${Math.max(...nums)} ${Math.min(...nums)}`
}
