//*** String Ends With? ***//

/**
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 */

// Use string method endsWith
// ending is the search parameter & str.length is the end position
const solution = (str, ending) => str.endsWith(ending, str.length)

console.log(solution('abcde', 'cde'))
