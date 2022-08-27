/***	Count the Digit
 *
 * Take an integer n (n > = 0) and digit d (0 <= d <= 9) as an int.
 *
 * Square all numbers k (0 <= k <= n) between 0 & n
 *
 * Count the numbers of digits d used in the writing of all the k**2
 *
 * call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
 *
 */

// use for loop
// square all numbers
// count all numbers
const nbDig = (n, d) => {
	let count = 0
	for (let i = 0; i <= n; i++) {
		let squared = i ** 2
		let str = squared.toString()
		str.split('').map((int) => (int == d.toString() ? (count += 1) : null))
	}
	return Number(count)
}

console.log(nbDig(25, 1))
