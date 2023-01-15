/*** Fake Binary
 * 
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
 * 
 * Return the resulting string.
 */

const fakeBin = x => x.split('').map(int => int >= 5 ? '1' : '0').join('')
