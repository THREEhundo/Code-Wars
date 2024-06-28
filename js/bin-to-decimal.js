//Complete the function which converts a binary number (given as a string) to a decimal number.

const binToDec = bin => {
	// parseInt(string, radix) parses a string and returns an integer.
	// The radix parameter specifies the number system to use.
	// For binary, we use radix 2.
	return parseInt(bin, 2)
}

// Alternative implementation using reduce:

const binToDecAlt = bin => {
	// Split the binary string into an array of characters
	return (
		bin
			.split('')
			// Reduce the array to a single number
			.reduce((dec, bit, index, array) => {
				// If the bit is '1', add the corresponding power of 2
				// The power is determined by the position from the right

				// For the first bit (index 0):  2^(4-1-0) = 2^3 = 8
				// For the second bit (index 1): 2^(4-1-1) = 2^2 = 4
				// For the third bit (index 2):  2^(4-1-2) = 2^1 = 2
				// For the fourth bit (index 3): 2^(4-1-3) = 2^0 = 1

				// So the powers of 2 are correctly assigned: 8, 4, 2, 1
				// Matching the binary positions:    1,  0, 1, 0
				// Result: (1*8) + (0*4) + (1*2) + (0*1) = 8 + 0 + 2 + 0 = 10
				if (bit === '1') {
					return dec + Math.pow(2, array.length - 1 - index)
				}
				// If the bit is '0', just return the current sum
				return dec
			}, 0)
	) // Start with an initial value of 0
}

console.log(binToDec('1010'))
