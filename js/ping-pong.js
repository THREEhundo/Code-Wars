/****************************/
/*** Ping Pong	6/26
/***************************/

/***
 * While Mrs Pong is away visiting her sister, Mr Pong has foolishly set up a ping pong table in his lounge room, and invites his neighbour Mr Ping over for a friendly ping pong session.
 *
 * When Mr Ping hits the ping pong ball, the ping pong ball goes ping.
 *
 * When Mr Pong hits the ping pong ball, the ping pong ball goes pong.
 *
 * Unfortunately, not every hit goes where it was meant to...
 *
 * Sometimes the ping pong ball hits the net, or bounces off a wall, or it ricochets off Mrs Pong's rather expensive porcelain collection, a light fitting, or various pieces of lounge furniture, before finally coming to rest on the floor. When that happens there are all kinds of bad noises.
 *
 * Who scored the most points?
 *
 * !NOTES
 *
 * To score a point the same player must bopth serve and win the rally.
 *
 * Whoever picks the ball off the floor will serve next.
 *
 */

const pingPong = (sounds) => {
	// first index has to equal last index
	// loser serves next round?
	// bad sound == last player loses round
	// if scores are even, the winner is the player who did not hit the final bad shot
	let soundArr = sounds.split('-')
	let ping = 0
	let pong = 0
	let lastCorrect
	for (let i = 0; i < soundsArr.length; i++) {
		if (soundArr[i] === 'ping' && soundArr[i + 1] === 'pong') ping++
		if (soundArr[i] === 'pong' && soundArr[i + 1] != 'pong')
			lastCorrect = 'pong'
		if (soundArr[i] === 'pong' && soundArr[i + 1] === 'ping') pong++
		if (soundArr[i] === 'pong' && soundArr[i + 1] != 'ping')
			lastCorrect = 'ping'
	}
	if (ping > pong) return 'ping'
	if (pong > ping) return 'pong'
}

console.log(pingPong('ping-pong-ping-pong-bonk-bing-doof'))
