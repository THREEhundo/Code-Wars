/** Convert an array of strings to array of numbers
 *
 * Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
 *
 */

const toNumberArray = strArr => strArr.map(str => Number(str))

console.log(toNumberArray(['1.1', '2.2', '3.3']))
