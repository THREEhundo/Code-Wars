/*** Round up to the next multiple of 5
 *
 * Given an integer as input, can you round it to the next (meaning, 'greater than or equal') multiple of 5.
 *
 * Input may be any positive or negative integer (including 0).
 *
 * You can assume that all inputs are valid integers.
 *
 */

const roundToNext5 = n => (n % 5 == 0 ? n : roundToNext5(++n))

console.log(roundToNext5(39))
