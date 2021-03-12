import React from 'react'
import Character from './Character.js';
import PropTypes from 'prop-types';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// <TextBoxComponent placeholder="Outlined" cssClass="e-outline" floatLabelType="Auto" />

// <TextField id="standard-basic" label="Standard" />

class CharSelect extends React.Component {
	constructor() {
		super();
		this.state = new Character
	}

	render () {
		return (
			<div className='CharSelect'>
				<form>
					<h2>Character Name</h2>
					<input
						id='CharSelectName'
						type='text'
					/>
					<h2>Base Stats:</h2>
					<p>HP</p>
					<input
						id='CharSelectBaseHP'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharSelectBaseDEX'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharSelectBaseATK'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharSelectBaseDEF'
						type='number'
					/>
					<h2>Skill Dice</h2>
					<p>Unique numbers (corresponding to skill number) separated by commas</p>
					<input
						id='CharSelectDiceAcq'
						type='text'
					/>
					<h2>Innate</h2>
					<p>Check if innate + 1 has been reached</p>
					<input
						id='CharSelectBaseInnate'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharSelectBaseCurrHP'
						type='number'
					/>
					<h2>Loot</h2>
					<p>List of loot separated by commas</p>
					<input
						id='CharSelectLoot'
						type='text'
					/>
					<h2>Notes</h2>
					<p>Any extra notes, eg skill die that needs a specific value remembered</p>
					<input
						id='CharSelectNotes'
						type='text'
					/>
					<h2>Locked Slots</h2>
					<input
						id='CharSelectLockedSlots'
						type='text'
					/>
					<h2>Scars</h2>
					<input
						id='CharSelectScars'
						type='text'
					/>
				</form>
			</div>
		)
	}
}



export default CharSelect