/****************************/
/*** Is this a triangle?	5/11
/***************************/

/**
 * Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
 *
 * (In this case, all triangles must have surface greater than 0 to be accepted).
 */

// sum of any 2 sides of a triangle must be greate than or equal to the length of the third side.
const isTriangle = (a, b, c) =>
	a + b > c && a + c > b && b + c > a ? true : false

// ! Best Practice (Remove true/false assertion)
const isTriangleBestPractice = (a, b, c) => a + b > c && a + c > b && b + c > a

console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
