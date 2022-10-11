//*** String Week Challenge - Day 3 ***//

/**
 * If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.
 *
 * Done it?
 * Awesome.
 * Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard.
 * Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).
 *
 *
 */

const replaceChar = s =>
	s
		.replaceAll('S', ' ')
		.replaceAll('P', ' ')
		.replaceAll('A', ' ')
		.replaceAll('C', ' ')
		.replaceAll('E', ' ')

console.log(
	replaceChar(
		'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
	)
)
