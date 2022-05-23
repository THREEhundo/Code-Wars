/****************************/
/*** Unique in Order			5/23
/***************************/

/***
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 ***/

function uniqueInOrder(iterable) {
	let newArr = []
	let arr
	typeof iterable === 'string' ? (arr = iterable.split('')) : (arr = iterable)
	arr.map((item, index, array) => {
		return index === 0 || array[index - 1] !== item ? newArr.push(item) : ''
	})
	return newArr
}

const uniqueInOrderBestPractice = (iterable) =>
	[...iterable].filter((a, i) => a !== iterable[i])
console.log(unique1('AAAABBBCCDAABBB'))
