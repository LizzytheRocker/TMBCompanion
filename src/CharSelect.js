import React from 'react'
import Character from './Character.js';
// import PropTypes from 'prop-types';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// <TextBoxComponent placeholder="Outlined" cssClass="e-outline" floatLabelType="Auto" />

// <TextField id="standard-basic" label="Standard" />

class CharSelect extends React.Component {
	constructor() {
		super();
		this.state = { char: new Character }
	}

	submitChar() {
		var name = document.getElementByID('CharSelectName').nodeValue;
		this.state.char.name = name;
		var hp = document.getElementById('CharSelectBaseHP').nodeValue;
		var dex = document.getElementById('CharSelectBaseDEX').nodeValue;
		var atk = document.getElementById('CharSelectBaseATK').nodeValue;
		var def = document.getElementById('CharSelectBaseDEF').nodeValue;
		this.state.char.stats_base = [hp, dex, atk, def];
		var dice_acq = document.getElementById('CharSelectDiceAcq').nodeValue;
		this.state.char.dice_acq = dice_acq;
		var innate = document.getElementById('CharSelectInnate').nodeValue;
		this.state.char.innate = innate;
		var curr_hp = document.getElementById('CharSelectCurrHP').nodeValue;
		this.state.char.curr_hp = curr_hp;
		var loot = document.getElementById('CharSelectLoot').nodeValue;
		this.state.char.loot = loot;
		var notes = document.getElementById('CharSelectNotes').nodeValue;
		this.state.char.player_notes = notes;
		var locked = document.getElementById('CharSelectLockedSlots').nodeValue;
		this.state.char.locked_slots = locked;
		var scars = document.getElementById('CharSelectScars').nodeValue;
		this.state.char.scars = scars;
		console.log(JSON.stringify(this.state.char))
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
						id='CharSelectInnate'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharSelectCurrHP'
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
					<input
						id='CharSelectSubmit'
						type='submit'
						value='Submit'
						onClick='submitChar()'
					/>
					{/* <script type="text/javascript">
						function submitChar() {
							var name = document.getElementByID('CharSelectName').value;
							this.state.char.#name = name;
						}
					</script> */}
				</form>
			</div>
		)
	}
}

export default CharSelect