import React from 'react'
import Character from './Character.js';
// import PropTypes from 'prop-types';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// <TextBoxComponent placeholder="Outlined" cssClass="e-outline" floatLabelType="Auto" />

class CharInfoLoad extends React.Component {
	constructor() {
		super();
		this.state = { char: new Character }
		// this.state.char.name = 'test'
	}

	async submitChar() {
		try {
			if (document.getElementById('CharInfoName').value != "") {
				this.state.char.name = document.getElementById('CharInfoName').value;
			}
			var basehp = document.getElementById('CharInfoBaseHP').value;
			var basedex = document.getElementById('CharInfoBaseDEX').value;
			var baseatk = document.getElementById('CharInfoBaseATK').value;
			var basedef = document.getElementById('CharInfoBaseDEF').value;
			this.state.char.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
			var dicehp = document.getElementById('CharInfoDiceHP').value;
			var dicedex = document.getElementById('CharInfoDiceDEX').value;
			var diceatk = document.getElementById('CharInfoDiceATK').value;
			var dicedef = document.getElementById('CharInfoDiceDEF').value;
			this.state.char.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
			this.state.char.dice_acq = document.getElementById('CharInfoDiceAcq').value;
			this.state.char.innate = Boolean(document.getElementById('CharInfoInnate').value);
			this.state.char.curr_hp = Number(document.getElementById('CharInfoCurrHP').value);
			this.state.char.loot = document.getElementById('CharInfoLoot').value;
			this.state.char.player_notes = document.getElementById('CharInfoNotes').value;
			this.state.char.locked_slots = document.getElementById('CharInfoLockedSlots').value;
			this.state.char.scars = document.getElementById('CharInfoScars').value;
			document.getElementById("Download").href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.char))}`;
			document.getElementById("Download").download = this.state.char.name + '.json';
		}
		catch (error) {
			if (error.name == "TypeError") {
				alert("Make sure to only input whole numbers for your stats and current HP!");
				document.getElementById("Download").removeAttribute("href");
				document.getElementById("Download").removeAttribute("download");
			}
			if (error.name == "RangeError") {
				alert("Make sure your base stats are at least 1, and your other stats and current HP are at least 0!");
				document.getElementById("Download").removeAttribute("href");
				document.getElementById("Download").removeAttribute("download");
			}
		}
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
				document.getElementById('CharInfoName').value = tmp.name;
				document.getElementById('CharInfoBaseHP').value = tmp.stats_base.hp;
				document.getElementById('CharInfoBaseDEX').value = tmp.stats_base.dex;
				document.getElementById('CharInfoBaseATK').value = tmp.stats_base.atk;
				document.getElementById('CharInfoBaseDEF').value = tmp.stats_base.df;
				document.getElementById('CharInfoDiceHP').value = tmp.stats_dice.hp;
				document.getElementById('CharInfoDiceDEX').value = tmp.stats_dice.dex;
				document.getElementById('CharInfoDiceATK').value = tmp.stats_dice.atk;
				document.getElementById('CharInfoDiceDEF').value = tmp.stats_dice.df;
				document.getElementById('CharInfoDiceAcq').value = tmp.dice_acq;
				document.getElementById('CharInfoInnate').checked = Boolean(tmp.innate);
				document.getElementById('CharInfoCurrHP').value = tmp.curr_hp;
				document.getElementById('CharInfoLoot').value = tmp.loot;
				document.getElementById('CharInfoNotes').value = tmp.player_notes;
				document.getElementById('CharInfoLockedSlots').value = tmp.locked_slots;
				document.getElementById('CharInfoScars').value = tmp.scars;
			})
			reader.readAsText(f);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }
	render() {
		return (
			<div className='CharInfoLoad'>
				<form>
					<div class="row">
						<div class="row">
							<div class="col">
							</div>
							<div class="col">
								<h2>Character Name:</h2>
								<input
									id='CharInfoName'
									type='text'
								/>
							</div>
							<div class="col">
								<h2>Character File:</h2>
								<input
									type="file"
									id="files"
									name="files[]"
									multiple
									onChange={() => this.handleFileSelect(document.getElementById('files'))}
								/>
							</div>
							<div class="col">
							</div>
						</div>
						<div class="row">
						</div>
						<div class="row">
							<div class="col">
								<h2>Base Stats:</h2>
							</div>
							<div class="col">
								<h2>Stat Increases:</h2>
							</div>
						</div>

    						<div class="col">
							<p>HP</p>
							<input
								id='CharInfoBaseHP'
								type='number'
							/>
							<p>DEX</p>
							<input
								id='CharInfoBaseDEX'
								type='number'
							/>
    						</div>
    						<div class="col">
      							<p>ATK</p>
							<input
								id='CharInfoBaseATK'
								type='number'
							/>
							<p>DEF</p>
							<input
								id='CharInfoBaseDEF'
								type='number'
							/>
    						</div>
						<div class="col">
							<p>HP</p>
							<input
								id='CharInfoDiceHP'
								type='number'
							/>
							<p>DEX</p>
							<input
								id='CharInfoDiceDEX'
								type='number'
							/>
    						</div>
						<div class="col">
      							<p>ATK</p>
							<input
								id='CharInfoDiceATK'
								type='number'
							/>
							<p>DEF</p>
							<input
								id='CharInfoDiceDEF'
								type='number'
							/>
    						</div>
						<div class="row">
						</div>
						<div class="row">
							<div class="col">
								<h2>Skill Dice</h2>
								<input
									id='CharInfoDiceAcq'
									type='text'
								/>
							</div>
							<div class="col">
								<h2>Current HP</h2>
								<input
									id='CharInfoCurrHP'
									type='number'
								/>
							</div>
							<div class="col">
								<h2>Loot</h2>
								<input
									id='CharInfoLoot'
									type='text'
								/>
							</div>
							<div class="col">
								<h2>Innate +1</h2>
								<input
									id='CharInfoInnate'
									type='checkbox'
								/>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<h2>Notes</h2>
								<input
									id='CharInfoNotes'
									type='text'
								/>
							</div>
							<div class="col">
								<h2>Locked Slots</h2>
								<input
									id='CharInfoLockedSlots'
									type='text'
								/>
							</div>
							<div class="col">
								<h2>Scars</h2>
								<input
									id='CharInfoScars'
									type='text'
								/>
							</div>
						</div>
  					</div>
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

					<output id="list"></output>
				</form>
			</div>
		)
	}
}

export default CharInfoLoad