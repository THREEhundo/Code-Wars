//* Determine if the poker hand is flush

/**
 * Determine if the poker hand is flush, meaning if the five cards are of the same suit.
 *
 * Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs).
 *
 * No jokers included.
 *
 * Your function should return true if the hand is a flush, false otherwise.
 *
 * The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 */

const isFlush = cards => {
	let suit
	return cards
		.map((card, i) => {
			let cardSuit = card.slice(card.length - 1, card.length)
			if (i == 0) suit = cardSuit
			console.log(cardSuit)
			return card.endsWith(suit)
		})
		.every(card => card == true)
}

const flushFinder = cards =>
	cards.every(card => cards[0].slice(-1) === card.slice(-1))

console.log(isFlush(['AS', '3S', '9S', 'KS', '4S']))
console.log(isFlush(['AD', '4S', '7H', 'KC', '5S']))
console.log(isFlush(['AD', '4S', '10H', 'KC', '5S']))
console.log(isFlush(['QD', '4D', '10D', 'KD', '5D']))
console.log(isFlush(['10D', '4D', 'QD', 'KD', '5D']))
