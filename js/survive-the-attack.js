/** Survive the Attack
 *
 * Given two rrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.
 *
 * CONDITIONS
 *
 * Each sodier attacks the opposing soldier in the same index of the array.
 * The survivor is the number with the highest value.
 * 		If the value is the sme they both perish.
 * 		if one of the values is empty (different array lengths) the non-empty value soldier survives.
 * To survive the defending side must have more survivors than the attacking side.
 * In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
 * 		The initial attack power is the sum of all the values in each array.
 */

const hasSurvived = (attackers, defenders) => {
	let attack = 0,
		defense = 0
	if (attackers.length > defenders.length) attack += 1
	if (attackers.length < defenders.length) defense += 1

	if (attackers.length === defenders.length)
		attackers.map((soldier, i) => {
			console.log(attackers[i], defenders[i])
			console.log(attackers[i] > defenders[i])
			if (attackers[i] > defenders[i]) attack += attackers[i]
			if (attackers[i] < defenders[i]) defense += defenders[i]
			if (!defenders[i]) attack += attackers[i]
			if (!attackers[i]) defense += defenders[i]
		})
	return attack > defense ? true : false
}

console.log(
	hasSurvived(
		[26, 78, 91, 37, 82, 86, 8, 86, 15, 58],
		[45, 94, 57, 31, 1, 94, 4, 8, 28, 4]
	)
)
