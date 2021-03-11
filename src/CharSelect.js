import React from 'react'

const CharSelect = () => {
	return (
		<div className='CharSelect'>
			<h2>Character Selection</h2>
			<p>Select the character that you want to add to the campaign.</p>
			<div class="dropdown">
				<button class="dropbtn">Character</button>
				<div class="dropdown-content">
					<a href="#">Boomer</a>
					<a href="#">Duster</a>
					<a href="#">Ghillie</a>
					<a href="#">Nugget</a>
					<a href="#">Patches</a>
					<a href="#">Picket</a>
					<a href="#">Stanza</a>
					<a href="#">Tantrum</a>
					<a href="#">Tink</a>
				</div>
			</div>
		</div>
	)
}

export default CharSelect