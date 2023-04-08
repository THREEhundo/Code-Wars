/** Two to One
 *
 * Take 2 strings s1 and s2 including only letters from a to z.
 * const sorted =  a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 *
 */

const longest = (s1, s2) => {
	let arr = []
	const combo = s1 + s2
	combo.split('').map(str => (!arr.includes(str) ? arr.push(str) : ''))
	const sorted = arr.sort().join('')
	return sorted
}

console.log(longest('aretheyhere', 'yestheyarehere'))
