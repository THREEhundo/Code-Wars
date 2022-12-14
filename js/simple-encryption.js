/**
 * Simple Encryption #1 - Alternating Split
 *
 * Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
 *
 * Together with the encryption function, you should also implement a decryption function which reverses the process.
 *
 * If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 *
 * Together with the encryption function, you should also implement a decryption function which reverses the process.
 *
 * If the string S is an empty value or the integer N is not positive, return the first argument without changes.
 */

const encrypt = (text, n) => {
	// pull odd #s into array
	// pull even #s into array
	// concat array
	// repeat n times
	if (text == '' || n < 1) return ''

	let odd = [],
		even = [],
		newText = text
	//text.split('')
	//	.map((x, i) => (i % 2 == 0 ? even.push(x) : odd.push(x)))
	//	.join('')
	for (let i = n; i > 0; i--) {
		odd = []
		even = []
		newText
			.split('')
			.map((x, i) => (i % 2 == 0 ? even.push(x) : odd.push(x)))

		newText = [...odd, ...even].join('')
	}
	return newText
}

const decrypt = (encryptedText, n) => {
	// take encrypted text & push odd then even
	let decryptedArr = [],
		mid = Math.round(encryptedText.length / 2)

	for (let i = 0; i < encryptedText.length; i++) {}
	let encryptedArr = encryptedText.split('')
	let odd, even

	encryptedArr.reduce((prev, curr, i) => {}, [])
}
console.log(encrypt('012345', 3))

let a = [1, 2, 3, 4, 5]
let mid = a.length / 2
console.log(a.slice(mid, a.length))
