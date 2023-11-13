/***
 * There is a queue for the self-checkout tills at the supermarket.
 * Your task is to write a function to calculate the total time required for all the customers to check out.
 */

const queueTime = (custies, n) => {
	// Create an array of length n and initialize all its elements to 0. This array represents the time each till has spent serving customers.
	let tills = Array(n).fill(0)

	custies.forEach(custy => {
		// Find the index of the till with the minimum time spent so far using Math.min() and the spread operator.
		let nextTill = tills.indexOf(Math.min(...tills))

		// Update the time spent at the chosen till by adding the current customer's time.
		tills[nextTill] += custy
	})

	// Return the max time spent at any till, which represents the total time it takes to serve all customers.
	return Math.max(...tills)
}

console.log(queueTime([], 1), 0)
console.log(queueTime([1, 2, 3, 4], 1), 10)
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9)
console.log(queueTime([1, 2, 3, 4, 5], 100), 5)
console.log(queueTime([5, 3, 4], 1), 12)

/**
 * if no customers (empty array) 0 time is required to checkout
 * if 1 till reduce array to one value
 * if even number of tills add up array & divide by even number Math.ceil()
 * if number of tills is odd, add up array & divide by odd number Math.ceil()
 * return time
 */
