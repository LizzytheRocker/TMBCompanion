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
		this.state.char.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
		var dicehp = document.getElementById('CharSelectDiceHP').value;
		var dicedex = document.getElementById('CharSelectDiceDEX').value;
		var diceatk = document.getElementById('CharSelectDiceATK').value;
		var dicedef = document.getElementById('CharSelectDiceDEF').value;
		this.state.char.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
		this.state.char.dice_acq = document.getElementById('CharSelectDiceAcq').value;
		this.state.char.innate = Boolean(document.getElementById('CharSelectInnate').value);
		this.state.char.curr_hp = Number(document.getElementById('CharSelectCurrHP').value);
		this.state.char.loot = document.getElementById('CharSelectLoot').value;
		this.state.char.player_notes = document.getElementById('CharSelectNotes').value;
		this.state.char.locked_slots = document.getElementById('CharSelectLockedSlots').value;
		this.state.char.scars = document.getElementById('CharSelectScars').value;
		document.getElementById("Download").href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.char))}`;
		document.getElementById("Download").download = this.state.char.name + '.json';
	}

	async handleFileSelect(evt) {
    var files = evt.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
		var reader = new FileReader();
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
			reader.onload = (function(theFile) {
				var tmp = JSON.parse(theFile.target.result);
				document.getElementById('CharSelectName').value = tmp.name;
				document.getElementById('CharSelectBaseHP').value = tmp.stats_base.hp;
				document.getElementById('CharSelectBaseDEX').value = tmp.stats_base.dex;
				document.getElementById('CharSelectBaseATK').value = tmp.stats_base.atk;
				document.getElementById('CharSelectBaseDEF').value = tmp.stats_base.df;
				document.getElementById('CharSelectDiceHP').value = tmp.stats_dice.hp;
				document.getElementById('CharSelectDiceDEX').value = tmp.stats_dice.dex;
				document.getElementById('CharSelectDiceATK').value = tmp.stats_dice.atk;
				document.getElementById('CharSelectDiceDEF').value = tmp.stats_dice.df;
				document.getElementById('CharSelectDiceAcq').value = tmp.dice_acq;
				document.getElementById('CharSelectInnate').checked = Boolean(tmp.innate);
				document.getElementById('CharSelectCurrHP').value = tmp.curr_hp;
				document.getElementById('CharSelectLoot').value = tmp.loot;
				document.getElementById('CharSelectNotes').value = tmp.player_notes;
				document.getElementById('CharSelectLockedSlots').value = tmp.locked_slots;
				document.getElementById('CharSelectScars').value = tmp.scars;
			})
			reader.readAsText(f);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
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
					<input
						id='CharSelectDiceAcq'
						type='text'
					/>
					<h2>Innate +1</h2>
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
					<br /><br />
					<input
						type="file"
						id="files"
						name="files[]"
						multiple
						onChange={() => this.handleFileSelect(document.getElementById('files'))}
					/>
					<output id="list"></output>
				</form>
			</div>
		)
	}
}

export default CharSelect