//*** Pick Peaks ***//

const pickPeaks = arr => {
	const pos = arr
		.map((x, i) => (i > 0 ? Math.sign(x - arr[i - 1]) * i : 0))
		.filter(i => i != 0)
		.filter((x, i, a) => i < a.length - 1 && a[i + 1] < 0 && x > 0)
	return { pos: pos, peaks: pos.map(i => arr[i]) }
}
//  return {pos:[],peaks:[]}

/*
 * since the function requires an object with array's as values
 * reduce / filter
 * filter -> excluding first and last
 * if a number is greater than the prev & next push number and index into object
 * plateau logic -> if the greatest number comes up 3 or more times in a row,
 * the number before & after the triple have to be less.
 * Next number cannot be greater or last.
 */

//console.table(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]))

pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])
//pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])
//pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])
//pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])
//pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])
