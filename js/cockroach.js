/** Cockroach
 *
 * The cockroach is one of the fastest insects.
 *
 *  Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
 *
 */

const cockroachSpeed = s => Math.floor(s * 27.7777778)

console.log(cockroachSpeed(1.08))
