/*** Counting Sheep
 *
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 */

// create counter variable
// Map sheep
// add to counter if true
// return counter
const countSheeps = (arrayOfSheep) => {
	let sheep = 0
	arrayOfSheep.map((stall) => (stall ? sheep++ : sheep))
	return sheep
}
let arr = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
]
console.log(countSheeps(arr))
