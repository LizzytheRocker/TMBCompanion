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
		this.state.char.name = 'test'
	}

	async submitChar() {
		this.state.char.name = document.getElementById('CharSelectName').value;
		var basehp = document.getElementById('CharSelectBaseHP').value;
		var basedex = document.getElementById('CharSelectBaseDEX').value;
		var baseatk = document.getElementById('CharSelectBaseATK').value;
		var basedef = document.getElementById('CharSelectBaseDEF').value;
		this.state.char.stats_base = [Number(basehp), Number(basedex), Number(baseatk), Number(basedef)];
		var dicehp = document.getElementById('CharSelectDiceHP').value;
		var dicedex = document.getElementById('CharSelectDiceDEX').value;
		var diceatk = document.getElementById('CharSelectDiceATK').value;
		var dicedef = document.getElementById('CharSelectDiceDEF').value;
		this.state.char.stats_dice = [Number(dicehp), Number(dicedex), Number(diceatk), Number(dicedef)];
		this.state.char.dice_acq = document.getElementById('CharSelectDiceAcq').value.split(',').map(Number);
		this.state.char.innate = Boolean(document.getElementById('CharSelectInnate').value);
		this.state.char.curr_hp = Number(document.getElementById('CharSelectCurrHP').value);
		this.state.char.loot = document.getElementById('CharSelectLoot').value.split(',').map(String);
		this.state.char.player_notes = document.getElementById('CharSelectNotes').value;
		this.state.char.locked_slots = document.getElementById('CharSelectLockedSlots').value.split(',').map(String);
		this.state.char.scars = document.getElementById('CharSelectScars').value.split(',').map(String);
		document.getElementById("Download").href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.char))}`;
	}

	render() {
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
					<h2>Stat Increases:</h2>
					<p>HP</p>
					<input
						id='CharSelectDiceHP'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharSelectDiceDEX'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharSelectDiceATK'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharSelectDiceDEF'
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
					<br /><br />
					<a
						type="button"
						onClick={() => this.submitChar()}
						href={`data:text/json;charset=utf-8,${encodeURIComponent(
						JSON.stringify(this.state.char)
						)}`}
						download="character.json"
						id='Download'
						>
						{`Download Json`}
					</a>
				</form>
			</div>
		)
	}
}

export default CharSelect