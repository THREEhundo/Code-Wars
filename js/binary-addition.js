/*** Binary Addition
 * 
 * Implement a function that adds two numbers together and returns their sum in binary. 
 * 
 * The conversion can be done before, or after the addition.
 * 
 * The binary number returned should be a string.
 */

const addBinary = (a, b) => {
  let binary = ''
  let decimal = a + b
  while (decimal > 0) {
	binary = (decimal % 2) + binary
	decimal = Math.floor(decimal / 2)
  }
  return binary
}