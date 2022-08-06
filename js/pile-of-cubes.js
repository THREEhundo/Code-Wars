/*** Build a Pile of Cubes
 *
 * Your task is to construct a building which will be a pile of n cubes.
 * The cube at the bottom will have a volume of n^3, the cube above will have colume of (n-1)^3 and so on until the top which will have a colume of 1^3.
 *
 * You are given the total volume of m of the building. Being given m can you find the number of cubes you will have to build?
 *
 * The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the interger n such as n^3+(n-1)^3+...1^3 = m if such a n exists of -1 if there is no such n.
 *
 */

function findNb(m) {
	// run a for loop
	// terminate when total = m
	// n++^3 until m is reached.
	let lastNum = 0,
		total = 0
	for (let i = 1; i < m; i++) {
		let pow = Math.pow(i, 3)
		total += pow
		if (total === m) return (lastNum = i)
		if (total > m) return -1
	}
	if (lastNum != 0) return lastNum
	return -1
}

console.log(findNb(24723578342962))

/***
 * get time since midnight
 * get date
 * convert hours -> milli
 * convert min -> milli
 * convert sec -> milli
 */

const time = (h, m, s) => (h * 3600 + m * 60 + s) * 1000
