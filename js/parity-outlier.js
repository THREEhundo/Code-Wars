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
