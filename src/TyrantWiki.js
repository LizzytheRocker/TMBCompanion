import React from 'react'

class TyrantWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='TyrantWiki'>
				<br></br>
				<h1>Tyrant Wiki</h1>
				<br></br>

				<h2>Tyrant Card</h2>
				<h3>Front</h3>
				<h5><b>Required Progress Points:</b> On the right, the number in the gear lists the required Progress Points to fight the Tyrant.</h5>
				<h5><b>Maximum Days:</b> Below the required Progress Points, the number in the sun lists the maximum number of days in the Adventure to defeat the Tyrant.</h5>
				<h5><b>Creature Types:</b> In the bottom left, the symbols for each Baddie Creature Type to be used in this Adventure are shown.</h5>
				<h3>Back</h3>
				<h5><b>Baddie Queue:</b> At the top, it explains how to set up the Battle Mat and Baddie Queue for the Tyrant Encounter.</h5>
				<h5><b>Tyrant Skills:</b> In the middle, the Skills the Tyrant has are listed and described. Some of them may not appear on the list of Baddie Skills.</h5>
				<h5><b>Tyrant Die:</b> On the bottom, any unique symbols on the Tyrant Die are depicted and explained.</h5>
				<br></br>

				<h2>Tyrant Chip</h2>
				<h5>Each Tyrant has a chip that is used as a Baddie chip in the final battle.</h5>
				<br></br>

				<h2>Tyrant Die</h2>
				<h5>Each Tyrant with a black and gold crown symbol on its chip has a unique Tyrant Die that is rolled once per Tyrant turn. Roll this along with its Atk and Def Dice.</h5>
				<br></br>

				<h2>Tyrant Encounters</h2>
				<h5>Each Tyrant has Tyrant Encounter Cards specific to them. Tyrant Encounter Cards for the Tyrant you are pursuing are shuffled into your Encounter Deck before your Adventure begins.</h5>
			</div>
		)
	}
}

export default TyrantWiki