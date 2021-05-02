import React from 'react'

class BaddieWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='BaddieWiki'>
				<br></br>
				<h1>Baddie Wiki</h1>
				<br></br>

				<h2>Basic Info</h2>
				<h5><b>HP:</b> Top left, number in red next to the drop of blood. This is the baddie's max HP, as well as the HP it starts with.</h5>
				<h5><b>Initiative (Ini):</b> Left side, number in green next to the three horizontal lines. This is the baddie's starting spot on the Ini meter.</h5>
				<h5><b>Diagonal Movement:</b> Bottom left, two footprints, may or may not appear. If it does appear, this baddie can move diagonally.</h5>
				<h5><b>Attack Form:</b> Bottom left, either crossed swords (melee) or a bow and arrow (ranged). Melee baddies can only target adjacent (non-diagonal) opposing units, while ranged baddies can target any opposing units.</h5>
				<h5><b>Target(s):</b> Bottom, in the crosshairs. Melee baddies approach the closest opposing unit, breaking ties based on what they target. A flexing figure indicates that the baddies targets the opposing unit(s) with the
					highest current HP, while a non-flexing figure indicates that they target the opposing unit(s) with the lowest current HP. In the case of a tie, the party decides who the baddie targets. If there are multiple
					figures, then the baddie targets that many different opposing units. Roll each attack's dice seperately.</h5>
				<h5><b>Creature Type:</b> Bottom right. Trolls have a hammer in red, orcs have a battleaxe in dark blue, scales have four scales in light blue, goblins have an arrowhead in yellow, bogs have two mushrooms in green, and
					beasts have a pawprint in purple.</h5>
				<h5><b>Extra Baddies:</b> Bottom right, one or two skulls, may or may not appear. If it does appear, add 5 point baddies to the battle queue equal to the number of skulls.</h5>
				<h5><b>Defense:</b> Right side, number in yellow next to the shield. This is the number of defense die the baddie rolls each turn (except for any already active defense die). Shields rolled are placed on top of the
					baddie's chip, making them active. A baddie does not need to have a target in range to roll its defense dice.</h5>
				<h5><b>Attack:</b> Top right, number in white next to the sword. This is the number of attack die the baddie rolls against each of its targets each turn. Total sword numbers rolled equals the number of damage dealt to
					the target. If the baddie has multiple targets, roll these dice seperately for each.</h5>
				<h5><b>Skills:</b> Middle, black text. These skills are always in effect. If the skill targets, it applies to every unit targeted by the baddie. Refer below for a list of baddie skills and what they do.</h5>
				<h5><b>Baddie Backup Plan (BP) Skills:</b> Middle, blue text. These skills only trigger if the baddie rolls at least as many bones as shown here on its attack and defence dice during its turn. If the skill targets and
					the baddie has multiple targets, the party decides who the baddie targets. BP skills can only be triggered once per turn, after resolving the rolled attack and defence dice, even if the skill specifies a different
					timing. Refer below for a list of baddie skills and what they do.</h5>
				<h5><b>Name:</b> Bottom, white text. The name of the baddie.</h5>
				<h5><b>Baddie Points:</b> Back of the chip. Baddies can be 1 point, 5 points, 20 points, or tyrants.</h5>
				<br></br>

				<h2>Skills</h2>
				<h5><b>Aggravated:</b> If any Baddie has been defeated this battle, this unit gains +2 Atk.</h5>
				<h5><b>Assault:</b> This unit's Atk Stat is equal to its current # HP.</h5>
				<h5><b>Bleed:</b> Place Bleed Effect Die (looks like a bleeding cut) on target. Unit takes 1 True Dmg at the start of its turn (lasts entire battle).</h5>
				<h5><b>Blind Strike #:</b> At Start of Turn, this unit deals # Dmg to strongest adjacent unit.</h5>
				<h5><b>Break:</b> Any Atk Dice used to reduce this unit's HP must be Exhausted.</h5>
				<h5><b>Bribable:</b> Once per an opposing unit's turn, a Gearloc may discard a Loot to immediately take an extra turn for this unit (treat as an Ally).</h5>
				<h5><b>Callous:</b> This unit can only lose HP from Dmg dealt by Atk Dice.</h5>
				<h5><b>Careless #:</b> This unit takes # True Dmg.</h5>
				<h5><b>Compound:</b> This unit's Atk Stat is equal to the current round (Fatigue rounds count as 5).</h5>
				<h5><b>Confuse:</b> Place Confuse Effect Die (looks like a screaming person) on target; if this effect is already there, remove it. Unit's Atk Stat and Def Stat are swapped</h5>
				<h5><b>Corrosive:</b> At the end of this unit's turn, all remaining Def Dice in target's Active slots must be Exhausted immediately.</h5>
				<h5><b>Cunning:</b> Opposing units may only target this unit if it is the strongest Baddie on the Battle Mat.</h5>
				<h5><b>Daze:</b> Place Daze Effect Die (looks like 5 intersecting lines) on target until the end of its next turn. Unit cannot move on its turn.</h5>
				<h5><b>Decoy #:</b> When defeated, place a Decoy Effect Die (looks like a snake) on position with # HP. Party treats Decoy as opposing unit. While Decoy is on Battle Mat, Gearlocs may not attack Baddies. Decoy does not prolong a battle if Baddies are defeated.</h5>
				<h5><b>Detonate #:</b> At end of Movement Phase, if this unit is at less than full HP, it will defeat itself and deal # True Dmg to each adjacent position.</h5>
				<h5><b>Disruption:</b>  Advance Round Counter Die to Fatigue (symbol looks like red droplets) at the end of the round.</h5>
				<h5><b>Dive:</b> If the Flight Effect Die is Active on this unit at the start of its turn, immediately place this unit adjacent to weakest available opposing unit (and target it).</h5>
				<h5><b>Dodge:</b> This unit's HP cannot be reduced with Atk Dice.</h5>
				<h5><b>Engulf:</b> All Dmg rolled by this unit also hits all adjacent units to target (including self) as well as triggers reaction Skills, if applicable.</h5>
				<h5><b>Equipment:</b> When this unit enters the Battle Mat, roll a D6. Piece of Armor (1-2): Increase HP Stat by 2, Sharpening Stone (3-4): Increase Atk Stat by 1 (place Atk Die on Baddie to remember the buff), Eyeglass (5-6): Increase Ini Die by 2.</h5>
				<h5><b>Flee:</b> Remove this unit from Battle Mat at the end of Rounds 2 and 5 and place in Defeated Stack. If this happens, closest opposing unit with a Loot must discard 1.</h5>
				<h5><b>Flight:</b> At the end of this unit's turn, place a Flight Effect Die (looks like a wing on a talon) on it; if this effect is already there, remove it. While in Flight, this unit is <b>Untargetable</b>.</h5>
				<h5><b>Frenzy #:</b> If # of this unit's Atk Dice hit (no bones), roll # Atk Dice again and deal total Dmg of both rolls.</h5>
				<h5><b>Hardy:</b> Any turn this unit takes Dmg to its HP (including True Dmg), total is reduced to 1.</h5>
				<h5><b>Inspire #:</b> The next Baddie on the Ini Meter takes their turn immediately after this unit (move their Ini Die) and is granted # additional Atk Dice that turn.</h5>
				<h5><b>Intense #:</b> Target's Backup Plan loses # Bones (remove leftmost Bones first).</h5>
				<h5><b>Lashback #:</b> Any turn this unit is damaged by an adjacent opposing unit, this unit will then deal # Dmg back, so long as it was not defeated.</h5>
				<h5><b>Mischief #:</b> Remove # dice (player's choice) from target's Active Slots.</h5>
				<h5><b>One Mind:</b> On this unit's turn, all other Beast-Type Baddies (symbol looks like a paw) roll 1 Atk Die against their target(s).</h5>
				<h5><b>Poison #:</b> Set or reset a Poison Effect Die (Looks like a bottle with a skull and crossbones) on target to #. Target takes True Dmg equal to the Effect Die # at the start of its turn. After applying Dmg, reduce Effect Die by 1.</h5>
				<h5><b>Pull-In:</b> Target Party Member is placed in Krelln Starting Position adjacent to this unit, if possible.</h5>
				<h5><b>Rage #:</b> If this unit is not at full HP, it gains # additional Atk Dice.</h5>
				<h5><b>Raiding:</b> This unit gains 1 extra Atk Die for every additional Orc-Type Baddie on Battle Mat.</h5>
				<h5><b>Randomize:</b> Draw a random Splice & Dice Tyrant Die not already in use. This Tyrant uses it as its own for this battle.</h5>
				<h5><b>Recover #:</b> This unit gains # HP (up to full) at the start of its turn.</h5>
				<h5><b>Return:</b> If this is not the last Baddie defeated in this battle, place it on top of the BQ when defeated.</h5>
				<h5><b>Secrete #:</b> When attacked by adjacent opposing unit, add # Poison Effect Die to that unit (even if defeated).</h5>
				<h5><b>Self Repair #:</b> At the start of this unit's turn, place Def Dice totaling # on it (up to Def stat).</h5>
				<h5><b>Shock #:</b> Exhaust # Skill Dice (player's choice) from target's Skills Area (excluding dice used as counters).</h5>
				<h5><b>Signal #:</b> At the start of this unit's turn, add a single lesser Baddie to bottom of BQ (20Pt signals a 5Pt, 5Pt signals a 1Pt, 1Pt signals a 1Pt). This Skill triggers once per turn for # Rounds.</h5>
				<h5><b>Stench #:</b> When defeated, place Stench # Effect Die (looks like a skull surrounded by gas) on this position. Treat as untargetable obstacle. When Stench is placed, all units adjacent to this die are immediately dealt # True Dmg. Additionally, Gearlocs moving adjacent to Stench are dealt 1 True Dmg. At Start of Round, reduce Effect Die by 1.</h5>
				<h5><b>Stout:</b> This unit's last HP can only be removed by Fatigue.</h5>
				<h5><b>Stubborn:</b> When this unit is defeated, it immediately takes a turn before being removed from the Battle Mat.</h5>
				<h5><b>Stun:</b> Place Stun Effect Die (looks like one large and two small stars) on target. Target loses its next turn (negative Effects still apply).</h5>
				<h5><b>Submerge:</b> If this unit would move, instead roll a D6 and place in # Krelln Starting Position.</h5>
				<h5><b>Swap:</b> At the end of this unit's turn, it will switch positions with the closest strongest opposing unit.</h5>
				<h5><b>Taunt:</b> Place Taunt Effect Die (looks like a speech bubble with symbols in it) on this unit until the start of its next turn. Adjacent opposing units must attack this unit (units with multiple targets will attack this unit multiple times).</h5>
				<h5><b>Terrify:</b> After this unit is attacked, place a Terrify Effect Die (looks like a screaming face) on the attacking unit until the end of its next turn. If a unit has a Terrify Effect Die on it at the start of its next turn, it may not target any units with Skill: Terrify.</h5>
				<h5><b>Thick Skin #:</b> Ignore the first # Dmg this unit would take this turn (does not ignore True Dmg).</h5>
				<h5><b>Trap:</b> Land (symbol is green with trees) Encounters only. Gearloc of party's choice rolls a D6 when entering the Battle Mat. Gas Trap (1-2): Roll Poison Effect Die and apply results. Electrical Trap (3-4): Cannot use Skills during Round 1 (use Disable Effect Die as a reminder). Barbed Trap (5-6): Move down 2 spots on Ini Meter.</h5>
				<h5><b>Treasure:</b> When this unit is defeated, place Loot Die on its position (if you don't have Loot Die, instead draw a Loot).</h5>
				<h5><b>Trickery:</b> When this unit enters Battle Mat, immediately add other Baddie: Goblin Guru (20Pt, from Active Stacks only) to top of BQ. When 2 Goblin Gurus are on the Battle Mat, Dmg dealt to one unit is only applied to the other.</h5>
				<h5><b>Undead:</b> The first time this unit is defeated, place it back on top of BQ. When it re-enters play, it starts with only 2 HP, and its Atk Stat is doubled.</h5>
				<h5><b>Untargetable:</b> Place Untargetable Effect Die (looks like a branch with three leaves) on this unit. Until the start of this unit's next turn, it cannot be targeted by opposing units (Baddies with no target on the Battle Mat will not move).</h5>
				<h5><b>Weaken #:</b> Place a # Weaken Effect Die (looks like an open palm) on target. Gearloc's Dex is reduced by # next turn (other units reduce Atk Stat).</h5>
			</div>
		)
	}
}

export default BaddieWiki