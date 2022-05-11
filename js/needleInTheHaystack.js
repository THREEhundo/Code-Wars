/****************************/
/*** A Needle in the Haystack		5/6
/***************************/

/***
 * Can you find the needle in the haystack?
 *
 * Write a function findNeedle() that takes an array full of junk butr containing a 'needle'
 *
 * After your function finds the needle it should return a message (as a string) that says:
 *
 * 'found the needle at position ' plus the index it found the needle, so:
 *
 * findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
 *
 * should return 'found the needle at position 5' (in COBOL 'found the needle at position 6')
 */

const findNeedle = (haystack) => {
	let needle = haystack.find((item) => item === 'needle')
	if (needle) {
		let index = haystack.findIndex((elem) => elem === 'needle')
		return `found the needle at position ${index}`
	} else return
}

// !BEST PRACTICE

const findNeedleBestPractice = (haystack) =>
	`found the needle at position ${haystack.indexOf('needle')}`
