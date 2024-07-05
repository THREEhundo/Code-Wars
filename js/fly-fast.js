/**
 * Fly as fast as you can
 * Scenario:
Two trains are on the same line, 60 miles apart, heading towards each other, each traveling at 30 mph. A fly that can travel at 60 mph leaves one engine flying towards the other. Upon reaching the other engine, it instantaneously turns around, and heads back to the other engine. This is repeated until the two trains crash and the fly is annihilated at the same time.

Problem:
Write a function to calculate how far the fly has traveled by the time the trains collide.

Your function should be able to take varying inputs:

dist = the initial distance between the two trains
train = the speed of each train
fly = the speed of the fly
Note if the trains are not moving then the poor fly is confused, and enters a state of divine singularity so return null.
 */

const flyTime = (dist, train, fly) => {
	if (train === 0) {
		return null // Fly enters divine singularity
	}

	// Calculate time until collision
	const timeToCollision = dist / (2 * train)

	// Calculate the distance the fly travels
	const distanceTraveled = fly * timeToCollision

	// Round to 8 decimal places to avoid floating point precision issues
	return Math.round(distanceTraveled * 1e8) / 1e8
}

// Test cases
console.log(flyTime(60, 30, 60)) // Should be 60
console.log(flyTime(100, 50, 75)) // Should be 75
console.log(flyTime(50, 0, 100)) // Should be null
