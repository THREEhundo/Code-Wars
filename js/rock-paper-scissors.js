//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.
//
//Examples(Input1, Input2 --> Output):
//
//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

const rps = (p1, p2) =>
	p1 == 'scissors' && p2 == 'paper'
		? 'Player 1 won!'
		: p1 == 'scissors' && p2 == 'rock'
		? 'Player 2 won!'
		: p1 == 'scissors' && p2 == 'scissors'
		? 'Draw!'
		: p1 == 'rock' && p2 == 'paper'
		? 'Player 2 won!'
		: p1 == 'rock' && p2 == 'scissors'
		? 'Player 1 won!'
		: p1 == 'rock' && p2 == 'rock'
		? 'Draw!'
		: p1 == 'paper' && p2 == 'scissors'
		? 'Player 2 won!'
		: p1 == 'paper' && p2 == 'rock'
		? 'Player 1 won!'
		: 'Draw!'

const rpsBest = (p1, p2) => {
	let rules = {
		'rock': 'scissors',
		'paper': 'rock',
		'scissors': 'paper'
	}
	return p1 === p2
		? 'Draw'
		: p2 === rules[p1]
		? 'Player 1 won!'
		: 'Player 2 won!'
}

let p1 = 'rock'
let p2 = 'scissors'
