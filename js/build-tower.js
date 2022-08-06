/***
 * Build Tower
 *
 * Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
 *
 * For example, a tower with 3 floors looks like this:
 * 
 * [
  "  *  ",
  " *** ", 
  "*****"
	]
 */

const towerBuilder = (nFloors) => {
	//
	return [...Array(nFloors)].map(
		(_, i) =>
			' '.repeat(n - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - 1 - i)
	)
}
