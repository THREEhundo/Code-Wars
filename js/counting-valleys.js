/***
 * You need to count how many valleys you will pass
 *
 * Start is always at 0
 *
 * Every time you go down below 0 level counts as an entry of a valley and as you go up to 0 level from valley counts as an exit of a valley.
 *
 * One passed valley is equal to one entry & exit of a valley
 *
 */

const countingValleys = (str) => {
	// split string into array
	// map array and tally entrance & exit into count variables
	// if the counts equal return
	// if the counts differ return smaller #
	let count = 0,
		entrance = 0,
		exit = 0
	str.split('').map((letter, i) => {
		if (letter == 'D') count -= 1
		if (letter == 'U') count += 1
		//if (count == -1 && letter[i] - 1 !== -1) entrance += 1
		//if (count == 0 && i !== 0) exit += 1
		if (count === -1 && exit == entrance) entrance += 1
		if (count === 0 && exit == entrance - 1 && letter == 'U') exit += 1
	})
	return exit
}

console.log(countingValleys('UFFDDFDUDFUFU'))
