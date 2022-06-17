/****************************/
/*** Find the Parity Outlier		6/11
/***************************/

/***
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
 * Write a method that takes the array as an argument and returns this 'outlier' N.
 */

const findOutlier = (integers) => {
	// find all odd
	// find all even
	// filter even or odd # && there is only one odd/even
	let even = integers.filter((n) => {
		if ((n === 0 || n % 2) == 0) {
			return n
		} else {
			return
		}
	})
	even.filter((n) => !integers.includes(n), new Set(integers))
	let odd = integers.filter((n) => {
		if (n % 2 == 0) {
			return n
		} else {
			return
		}
	})
	odd.filter((n) => !integers.includes(n), new Set(integers))
	return even.length === 1 ? even[0] : odd[0]
}

function findOutlierBP(int) {
	var even = int.filter((a) => a % 2 == 0)
	var odd = int.filter((a) => a % 2 !== 0)
	return even.length == 1 ? even[0] : odd[0]
}

let instances
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
]
//console.log(instances(data))
const numbers = [1, 11, 111, 23, 132, 9]
console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => (a < b ? -1 : 1), 0))
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let rNames = names.reduce((acc, curr) => {
	!acc[curr] ? (acc[curr] = 1) : acc[curr]++
	return acc
}, {})
console.log(rNames)

let snip = (str) =>
	str
		.split(' ')
		.map((word) => (word.length > 2 ? word.slice(1, word.length - 1) : word))
		.join(' ')
let snipSnip = (str) => {
	let newStr = str.split('')
	newStr.shift()
	newStr.pop()
	return newStr.join('')
}

const sumObjects = (arr) =>
	arr.reduce((acc, curr) => {
		!acc[curr] ? (acc[curr] = 1) : acc[curr]++
		return acc
	}, {})
console.log(sumObjects(data))

const cartTotal = (cartArr) =>
	cartArr.reduce((total, item) => {
		!total[item] ? (total[item] = 1) : total[item]++
		return total
	}, {})
console.log(cartTotal(data))

const findOdd = (a) => {
	let even = a.filter((num) => num % 2 == 0)
	let odd = a.filter((num) => num % 2 !== 0)
	console.log(`Even: ${even}, Odd: ${odd}`)
	return even.length == 1 ? even[0] : odd[0]
}

let r = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]
console.log(findOdd(r))
