/***
 * The Highest Profit Wins!
 *
 * Ben has a very simple idea to make some profit: he busy something and sells it again.
 * Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
 * Instead, he's going to buy it for the lowest possible price and sell it at the highest.
 *
 * Write a function that returns both the minumum and maximum number of the given list/array.
 */

const minMax = arr => [Math.min(...arr), Math.max(...arr)]

console.log(minMax([1, 2, 3, 4, 5]))
