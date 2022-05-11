/****************************/
/*** List Filtering			4/29
/***************************/

/***
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 */

function filter_list(l) {
	return l.filter((item) => {
		if (typeof item === 'number' || item === 0) {
			return item
		} else {
			return ''
		}
	})
}
let test = filter_list([1, 'a', 'b', 0, 15])
// Why does 0 not pass the test?

// !BEST PRACTICE

const filter_list_best_practice = (l) =>
	l.filter((item) => typeof item == 'number')
