/*** Grasshopper - Check for Factor
 * 
 * Factors are numbers you multiply together to get another number.
 * 
 * 2 and 3 are factors of 6 because 2 * 3 = 6
 * 	
 * 		You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
 * 
 * 		You can use the mod operator (%) in most languages to check for remainder.
 * 
 * For example 2 is not a factor of 7 because 7 % 2 = 1
 */

const checkForFactor = (base, factor) => base % factor === 0 ? true : false
