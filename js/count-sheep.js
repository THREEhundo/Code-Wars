/***
 * If You Can't Sleep, Count Sheep
 * 
 * Given a non-negative integer, 3 for example, return a string with a murmur: '1 sheep...2 sheep...3 sheep...
 */

const countSheep = n => {
	let sheepStr = ''
	for (let i = 0; i < n; i++) {
		sheepStr += `${i + 1} sheep...`
	}
	return sheepStr
}