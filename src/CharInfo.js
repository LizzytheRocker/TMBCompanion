import React from 'react'
import Character from './Character.js';
// import PropTypes from 'prop-types';
// import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
// <TextBoxComponent placeholder="Outlined" cssClass="e-outline" floatLabelType="Auto" />
import styled from "styled-components";

const Space = styled.div`
    padding: 23px;
`;

class CharInfo extends React.Component {
	constructor() {
		super();
		this.state = { char: new Character }
		// this.state.char.name = 'test'
	}

	async submitChar() {
		try {
			if (document.getElementById('CharInfoName').value != "") {
				this.state.char.name = document.getElementById('CharInfoName').value;
			} else {
				throw "Must have a name for the character";
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
			document.getElementById("Download").download = 'character-' + this.state.char.name + '.json';
		}
		catch(error){
			if (error.name == "TypeError") {
				alert("Make sure to only input whole numbers for your stats and current HP!");
			} else if (error.name == "RangeError") {
				alert("Make sure your base stats are at least 1, and your other stats and current HP are at least 0!");
			} else {
				alert("Error: " + error);
			}
			document.getElementById("Download").removeAttribute("href");
				document.getElementById("Download").removeAttribute("download");
		}
	}

	render() {
		return (
			<div className='CharInfo'>
				<form>
					<div class="row">
						<div class="row">
							<div class="col">
							</div>
							<div class="col">
								<h2>Character Name</h2>
								<input
									id='CharInfoName'
									type='text'
								/>
							</div>
							<div class="col">
							</div>
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

export default CharInfo