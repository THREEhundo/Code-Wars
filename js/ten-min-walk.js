/****************************/
/*** Take a Ten Minute Walk 			5/16
/***************************/

/***
 * You live in the city of Caresia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early for an appointment, so you decided to take the opportunity to go for a short walk.
 * The city provides its citizens with a Walk Generating App on their phones --
 * everytime yo upress the button it sends you an array of one-letter strings representing directions to walk
 * eg. ['n', 's', 'e', 'w']
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes and will, of course, return you to your starting point.
 ***/

const isValidWalk = (arr) => {
	if (arr.length !== 10) return false
	let first = arr.slice(0, 4)
	let second = arr.slice(5, 9)
	second.reverse('')
	return first === second ? true : false
}
