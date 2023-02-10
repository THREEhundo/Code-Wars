/***
 * Regex Validate PIN Code
 *
 * ATM machines allow for 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or 6 digits.
 *
 * If the function is passed a valid PIN string, return true, else return false.
 *
 */

const validatePIN = pin => {
	let arr = pin.split('')
	return (arr.length === 4 || arr.length === 6) &&
		arr.every(x => !isNaN(x) && x !== '\n')
		? true
		: false
}

console.log(validatePIN('123 '))
