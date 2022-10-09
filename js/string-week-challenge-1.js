//*** String Week Challenge - Day 1 ***//

/**
 * Please create a function that will fix a given string of this mistake before incalculable damage can be done!
 * ex.
 * "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
 * implement fix function ->
 * "PRO-TIP #498: IT'S NICE TO SAY HELLO."
 *
 */

/**
 * '0' <-> 'O'      '5' <-> 'S'
 * '1' <-> 'I'      '6' <-> 'G'
 * '2' <-> 'Z'      '7' <-> 'L'
 * '3' <-> 'E'      '8' <-> 'B'
 * '4' <-> 'h'      '9' <-> 'q'
 */

// split string
// map
// replace
// join
const decrypt = s => {
	console.log(s.split(''))
	//const replacer = (s) => if (s == '0' ?) return s.replace('0', 'O') :
	//s == '1' ? s.replace('1', 'I') : s == '2'
	//? s.replace('2', 'Z')
	//	: s == '3'		? s.replace('3', 'E')
	//	: s == '4'		? s.replace('4', 'h')
	//	: s == '5'		? s.replace('5', 'S')
	//	: s == '6'		? s.replace('6', 'G')
	//	: s == '7'		? s.replace('7', 'L')
	//	: s == '8'		? s.replace('8', 'B')
	//	: s == '9'		? s.replace('9', 'q')
	//	: s == 'O'		? s.replace('O', '0')
	//	: s == 'I'		? s.replace('I', '1')
	//	: s == 'Z'		? s.replace('Z', '2')
	//	: s == 'E'		? s.replace('E', '3')
	//	: s == 'h'		? s.replace('h', '4')
	//	: s == 'S'		? s.replace('S', '5')
	//	: s == 'G'		? s.replace('G', '6')
	//	: s == 'L'		? s.replace('L', '7')
	//	: s == 'B'		? s.replace('B', '8')
	//	: s == 'q'		? s.replace('q', '9')

	let sArr = s
		.split('')
		.map(s => {
			if (s == '0') return s.replace('0', 'O')
			else if (s == '1') return s.replace('1', 'I')
			else if (s == '2') return s.replace('2', 'Z')
			else if (s == '3') return s.replace('3', 'E')
			else if (s == '4') return s.replace('4', 'h')
			else if (s == '5') return s.replace('5', 'S')
			else if (s == '6') return s.replace('6', 'G')
			else if (s == '7') return s.replace('7', 'L')
			else if (s == '8') return s.replace('8', 'B')
			else if (s == '9') return s.replace('9', 'q')
			else if (s == 'O') return s.replace('O', '0')
			else if (s == 'I') return s.replace('I', '1')
			else if (s == 'Z') return s.replace('Z', '2')
			else if (s == 'E') return s.replace('E', '3')
			else if (s == 'h') return s.replace('h', '4')
			else if (s == 'S') return s.replace('S', '5')
			else if (s == 'G') return s.replace('G', '6')
			else if (s == 'L') return s.replace('L', '7')
			else if (s == 'B') return s.replace('B', '8')
			else if (s == 'q') return s.replace('q', '9')
			else return s
		})
		.join('')

	return sArr
}

console.log(decrypt("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))

// Create Parent
function Parent() {
	this.name = 'Parent'
}
// Greet method

// Create Child

// Create Child prototype

// Create Child constructor

// Call Child

//function Parent() {
//	this.name = 'Parent'
//}
//
//Parent.prototype.greet = function () {
//	console.log(`hey this is ${this.name}`)
//}
//
//function Child() {
//	Parent.call(this)
//	this.name = 'Child'
//}
//
//Child.prototype = Object.create(Parent.prototype)
//Child.prototype.constructor = Child
//Child.prototype.cry = function () {
//	console.log(`wahh`)
//}
//
//const child = new Child()
//
//child.cry()
//child.greet()
//console.log(child.constructor)
//console.log(child.constructor.name)
