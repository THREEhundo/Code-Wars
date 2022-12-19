/** Bouncing Balls
 *
 *  A child is playing with a ball on the nth floor of  tall building. The height of this floor above gorund level, h, is known.
 *
 * He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66)
 *
 * His mother looks out of a window 1.5 meters from the ground.
 *
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
 *
 * Three conditions must be met for  valid experiment:
 * 	Float parameter 'h' in meters must be greater than 0
 * 	Float parameter 'bounce' must be greter than 0 nd less than 1
 *  Float prmeter 'window' must be less than h
 *
 * If all three conditions above are fulfilled, return a positive integer, otherwise return -1
 *
 * Note:
 * The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
 *
 *
 */

const bouncingBall = (height, bounce, window) => {
	// height > 0
	//  1 > bounce > 0
	// height > window
	if (height > 0 && 1 > bounce && bounce > 0 && height > window) {
		if (bounce * height < window) return -1
		// count how many times bounce height > window height
		// once for the first fall
		// twice for every time after
		// 3 * .66 = 1.98
		// 1.98 * .66
		// create array of bounce heights > 0
		let i = height
		let newHeight = height
		let seen = 1
		//do {
		//	newHeight = height * bounce
		//	if (newHeight >= window) seen += 2
		//	i = newHeight
		//	console.log(i)
		//} while (i > window)
		console.log(newHeight)
		do {
			newHeight *= bounce
			newHeight > window ? (seen += 2) : seen
		} while (newHeight > window)
		return seen
	}
	return -1
}

console.log(bouncingBall(30, 0.6, 1.5))
