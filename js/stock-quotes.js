/***
 * Return the most profit from stock quotes.
 *
 * Stock quotes are stored in an array in order of date.
 *
 * The stock profit is the difference in buying and selling stock each day.
 *
 * Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing.
 *
 * Therefore, the most profit is the maxium difference of all pairs in a sequence of stock prices.
 */

// create negative infinity variable
// iterate through reduceRight
// if current number in array is less than - infinity, replace top

function getMostProfitFromStockQuotes(quotes) {
	let top = -Infinity
	return quotes.reduceRight((acc, curr) => {
		if (top < curr) top = curr
		return acc + top - curr
	}, 0)
}
