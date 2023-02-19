/*** Does array x contain all values within array y?
 *
 * We want to extend the array class so that it provides a contains_all? method.
 *
 * This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.
 *
 */

Object.defineProperty(Array.prototype, 'containsAll', {
	value: function containsAll(a) {
		return a.every(e => this.includes(e))
	}
})
