/****************************/
/*** How Good Are You Really?			5/25
/***************************/

/***
 * There was a test in y our class and you passed it.
 *
 * Congratulations!
 *
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 *
 * Return True if you're better, else False!
 *
 * Note:
 *
 * Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
 ***/

const betterThanAverage = (classPoints, yourPoints) => {
	classPoints = [...classPoints, yourPoints]
	let avg =
		classPoints.reduce((acc, curr) => (acc += curr)) / classPoints.length
	return yourPoints > avg ? true : false
}

console.log(betterThanAverage([2, 3], 5))

const betterThanAverageBestPractice = (classPoints, yourPoints) =>
	yourPoints >
	[...classPoints, yourPoints].reduce((a, b) => (a += b)) / classPoints.length
