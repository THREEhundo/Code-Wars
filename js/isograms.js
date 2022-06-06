/****************************/
/*** Isograms			6/6
/***************************/

/***
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
 * Assume the empty string is an isogram. Ignore letter case.
 ***/

// find any repeating letters
// split string
// map --> array
// remove that current index
// move into variable
// use find on that variable
// return true or false

// returns the mapped array.
//

//const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length

/***
 * Set takes in unique values of any type. Both primitive values or object references.
 */

const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length
//const isI = (str) =>
console.log(isIsogram('Dermatoglyphics'))
