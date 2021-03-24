import React from 'react'
import Game from './Game.js';
// import CharInfoButton from './CharInfoButton'
import Character from './Character.js';

class GameInfo extends React.Component {
	constructor() {
		super();
		this.state = { game: new Game }
		// this.state.game.name = 'test'
	}

	async submitGame() {
		this.state.game.save_name = document.getElementById('GameInfoName').value;
		this.state.game.tyrant = document.getElementById('GameInfoTyrant').value;
		this.state.game.day_count = Number(document.getElementById('GameInfoDayCount').value);
		this.state.game.progress_points = Number(document.getElementById('GameInfoProgPoints').value);
		this.state.game.encounters_completed = document.getElementById('GameInfoEncountersCompleted').value;
		this.state.game.encounters_remaining = document.getElementById('GameInfoEncountersRemaining').value;
		this.state.game.loot_used = document.getElementById('GameInfoLootUsed').value;
		// char 1
		var char = new Character;
		char.name = document.getElementById('CharInfoName1').value;
		var basehp = document.getElementById('CharInfoBaseHP1').value;
		var basedex = document.getElementById('CharInfoBaseDEX1').value;
		var baseatk = document.getElementById('CharInfoBaseATK1').value;
		var basedef = document.getElementById('CharInfoBaseDEF1').value;
		char.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
		var dicehp = document.getElementById('CharInfoDiceHP1').value;
		var dicedex = document.getElementById('CharInfoDiceDEX1').value;
		var diceatk = document.getElementById('CharInfoDiceATK1').value;
		var dicedef = document.getElementById('CharInfoDiceDEF1').value;
		char.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
		char.dice_acq = document.getElementById('CharInfoDiceAcq1').value;
		char.innate = Boolean(document.getElementById('CharInfoInnate1').value);
		char.curr_hp = Number(document.getElementById('CharInfoCurrHP1').value);
		char.loot = document.getElementById('CharInfoLoot1').value;
		char.player_notes = document.getElementById('CharInfoNotes1').value;
		char.locked_slots = document.getElementById('CharInfoLockedSlots1').value;
		char.scars = document.getElementById('CharInfoScars1').value;
		this.state.game.addCharacter(char);
		// char 2
		if (Boolean(document.getElementById('CharInfo2'))) {
			var char2 = new Character;
			char2.name = document.getElementById('CharInfoName2').value;
			var basehp = document.getElementById('CharInfoBaseHP2').value;
			var basedex = document.getElementById('CharInfoBaseDEX2').value;
			var baseatk = document.getElementById('CharInfoBaseATK2').value;
			var basedef = document.getElementById('CharInfoBaseDEF2').value;
			char2.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
			var dicehp = document.getElementById('CharInfoDiceHP2').value;
			var dicedex = document.getElementById('CharInfoDiceDEX2').value;
			var diceatk = document.getElementById('CharInfoDiceATK2').value;
			var dicedef = document.getElementById('CharInfoDiceDEF2').value;
			char2.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
			char2.dice_acq = document.getElementById('CharInfoDiceAcq2').value;
			char2.innate = Boolean(document.getElementById('CharInfoInnate2').value);
			char2.curr_hp = Number(document.getElementById('CharInfoCurrHP2').value);
			char2.loot = document.getElementById('CharInfoLoot2').value;
			char2.player_notes = document.getElementById('CharInfoNotes2').value;
			char2.locked_slots = document.getElementById('CharInfoLockedSlots2').value;
			char2.scars = document.getElementById('CharInfoScars2').value;
			this.state.game.addCharacter(char2);
		}
		// char 3
		if (Boolean(document.getElementById('CharInfo3'))) {
			var char3 = new Character;
			char3.name = document.getElementById('CharInfoName3').value;
			var basehp = document.getElementById('CharInfoBaseHP3').value;
			var basedex = document.getElementById('CharInfoBaseDEX3').value;
			var baseatk = document.getElementById('CharInfoBaseATK3').value;
			var basedef = document.getElementById('CharInfoBaseDEF3').value;
			char3.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
			var dicehp = document.getElementById('CharInfoDiceHP3').value;
			var dicedex = document.getElementById('CharInfoDiceDEX3').value;
			var diceatk = document.getElementById('CharInfoDiceATK3').value;
			var dicedef = document.getElementById('CharInfoDiceDEF3').value;
			char3.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
			char3.dice_acq = document.getElementById('CharInfoDiceAcq3').value;
			char3.innate = Boolean(document.getElementById('CharInfoInnate3').value);
			char3.curr_hp = Number(document.getElementById('CharInfoCurrHP3').value);
			char3.loot = document.getElementById('CharInfoLoot3').value;
			char3.player_notes = document.getElementById('CharInfoNotes3').value;
			char3.locked_slots = document.getElementById('CharInfoLockedSlots3').value;
			char3.scars = document.getElementById('CharInfoScars3').value;
			this.state.game.addCharacter(char3);
		}
		// char 4
		if (Boolean(document.getElementById('CharInfo4'))) {
			var char4 = new Character;
			char4.name = document.getElementById('CharInfoName4').value;
			var basehp = document.getElementById('CharInfoBaseHP4').value;
			var basedex = document.getElementById('CharInfoBaseDEX4').value;
			var baseatk = document.getElementById('CharInfoBaseATK4').value;
			var basedef = document.getElementById('CharInfoBaseDEF4').value;
			char4.stats_base = { hp: Number(basehp), dex: Number(basedex), atk: Number(baseatk), df: Number(basedef) };
			var dicehp = document.getElementById('CharInfoDiceHP4').value;
			var dicedex = document.getElementById('CharInfoDiceDEX4').value;
			var diceatk = document.getElementById('CharInfoDiceATK4').value;
			var dicedef = document.getElementById('CharInfoDiceDEF4').value;
			char4.stats_dice = { hp: Number(dicehp), dex: Number(dicedex), atk: Number(diceatk), df: Number(dicedef) };
			char4.dice_acq = document.getElementById('CharInfoDiceAcq4').value;
			char4.innate = Boolean(document.getElementById('CharInfoInnate4').value);
			char4.curr_hp = Number(document.getElementById('CharInfoCurrHP4').value);
			char4.loot = document.getElementById('CharInfoLoot4').value;
			char4.player_notes = document.getElementById('CharInfoNotes4').value;
			char4.locked_slots = document.getElementById('CharInfoLockedSlots4').value;
			char4.scars = document.getElementById('CharInfoScars4').value;
			this.state.game.addCharacter(char4);
		}
		document.getElementById("Download").href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state.game))}`;
		document.getElementById("Download").download = this.state.game.save_name + '.json';
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
				document.getElementById('GameInfoName').value = tmp.save_name;
				document.getElementById('GameInfoTyrant').value = tmp.tyrant;
				document.getElementById('GameInfoDayCount').value = tmp.day_count;
				document.getElementById('GameInfoProgPoints').value = tmp.progress_points;
				document.getElementById('GameInfoEncountersCompleted').value = tmp.encounters_completed;
				document.getElementById('GameInfoEncountersRemaining').value = tmp.encounters_remaining;
				document.getElementById('GameInfoLootUsed').value = tmp.loot_used;
				// char 1
				document.getElementById('CharInfoName1').value = tmp.characters[0].name;
				document.getElementById('CharInfoBaseHP1').value = tmp.characters[0].stats_base.hp;
				document.getElementById('CharInfoBaseDEX1').value = tmp.characters[0].stats_base.dex;
				document.getElementById('CharInfoBaseATK1').value = tmp.characters[0].stats_base.atk;
				document.getElementById('CharInfoBaseDEF1').value = tmp.characters[0].stats_base.df;
				document.getElementById('CharInfoDiceHP1').value = tmp.characters[0].stats_dice.hp;
				document.getElementById('CharInfoDiceDEX1').value = tmp.characters[0].stats_dice.dex;
				document.getElementById('CharInfoDiceATK1').value = tmp.characters[0].stats_dice.atk;
				document.getElementById('CharInfoDiceDEF1').value = tmp.characters[0].stats_dice.df;
				document.getElementById('CharInfoDiceAcq1').value = tmp.characters[0].dice_acq;
				document.getElementById('CharInfoInnate1').checked = Boolean(tmp.characters[0].innate);
				document.getElementById('CharInfoCurrHP1').value = tmp.characters[0].curr_hp;
				document.getElementById('CharInfoLoot1').value = tmp.characters[0].loot;
				document.getElementById('CharInfoNotes1').value = tmp.characters[0].player_notes;
				document.getElementById('CharInfoLockedSlots1').value = tmp.characters[0].locked_slots;
				document.getElementById('CharInfoScars1').value = tmp.characters[0].scars;
				// char 2
				if (tmp.characters.length > 1) {
					document.getElementById('CharInfoName2').value = tmp.characters[1].name;
					document.getElementById('CharInfoBaseHP2').value = tmp.characters[1].stats_base.hp;
					document.getElementById('CharInfoBaseDEX2').value = tmp.characters[1].stats_base.dex;
					document.getElementById('CharInfoBaseATK2').value = tmp.characters[1].stats_base.atk;
					document.getElementById('CharInfoBaseDEF2').value = tmp.characters[1].stats_base.df;
					document.getElementById('CharInfoDiceHP2').value = tmp.characters[1].stats_dice.hp;
					document.getElementById('CharInfoDiceDEX2').value = tmp.characters[1].stats_dice.dex;
					document.getElementById('CharInfoDiceATK2').value = tmp.characters[1].stats_dice.atk;
					document.getElementById('CharInfoDiceDEF2').value = tmp.characters[1].stats_dice.df;
					document.getElementById('CharInfoDiceAcq2').value = tmp.characters[1].dice_acq;
					document.getElementById('CharInfoInnate2').checked = Boolean(tmp.characters[1].innate);
					document.getElementById('CharInfoCurrHP2').value = tmp.characters[1].curr_hp;
					document.getElementById('CharInfoLoot2').value = tmp.characters[1].loot;
					document.getElementById('CharInfoNotes2').value = tmp.characters[1].player_notes;
					document.getElementById('CharInfoLockedSlots2').value = tmp.characters[1].locked_slots;
					document.getElementById('CharInfoScars2').value = tmp.characters[1].scars;
				}
				// char 3
				if (tmp.characters.length > 2) {
					document.getElementById('CharInfoName3').value = tmp.characters[2].name;
					document.getElementById('CharInfoBaseHP3').value = tmp.characters[2].stats_base.hp;
					document.getElementById('CharInfoBaseDEX3').value = tmp.characters[2].stats_base.dex;
					document.getElementById('CharInfoBaseATK3').value = tmp.characters[2].stats_base.atk;
					document.getElementById('CharInfoBaseDEF3').value = tmp.characters[2].stats_base.df;
					document.getElementById('CharInfoDiceHP3').value = tmp.characters[2].stats_dice.hp;
					document.getElementById('CharInfoDiceDEX3').value = tmp.characters[2].stats_dice.dex;
					document.getElementById('CharInfoDiceATK3').value = tmp.characters[2].stats_dice.atk;
					document.getElementById('CharInfoDiceDEF3').value = tmp.characters[2].stats_dice.df;
					document.getElementById('CharInfoDiceAcq3').value = tmp.characters[2].dice_acq;
					document.getElementById('CharInfoInnate3').checked = Boolean(tmp.characters[2].innate);
					document.getElementById('CharInfoCurrHP3').value = tmp.characters[2].curr_hp;
					document.getElementById('CharInfoLoot3').value = tmp.characters[2].loot;
					document.getElementById('CharInfoNotes3').value = tmp.characters[2].player_notes;
					document.getElementById('CharInfoLockedSlots3').value = tmp.characters[2].locked_slots;
					document.getElementById('CharInfoScars3').value = tmp.characters[2].scars;
				}
				// char 4
				if (tmp.characters.length > 3) {
					document.getElementById('CharInfoName4').value = tmp.characters[3].name;
					document.getElementById('CharInfoBaseHP4').value = tmp.characters[3].stats_base.hp;
					document.getElementById('CharInfoBaseDEX4').value = tmp.characters[3].stats_base.dex;
					document.getElementById('CharInfoBaseATK4').value = tmp.characters[3].stats_base.atk;
					document.getElementById('CharInfoBaseDEF4').value = tmp.characters[3].stats_base.df;
					document.getElementById('CharInfoDiceHP4').value = tmp.characters[3].stats_dice.hp;
					document.getElementById('CharInfoDiceDEX4').value = tmp.characters[3].stats_dice.dex;
					document.getElementById('CharInfoDiceATK4').value = tmp.characters[3].stats_dice.atk;
					document.getElementById('CharInfoDiceDEF4').value = tmp.characters[3].stats_dice.df;
					document.getElementById('CharInfoDiceAcq4').value = tmp.characters[3].dice_acq;
					document.getElementById('CharInfoInnate4').checked = Boolean(tmp.characters[3].innate);
					document.getElementById('CharInfoCurrHP4').value = tmp.characters[3].curr_hp;
					document.getElementById('CharInfoLoot4').value = tmp.characters[3].loot;
					document.getElementById('CharInfoNotes4').value = tmp.characters[3].player_notes;
					document.getElementById('CharInfoLockedSlots4').value = tmp.characters[3].locked_slots;
					document.getElementById('CharInfoScars4').value = tmp.characters[3].scars;
				}
			})
			reader.readAsText(f);
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

	render() {
		return (
			<div className='GameInfo'>
				<form>
					<h2>Game Save Name</h2>
					<input
						id='GameInfoName'
						type='text'
					/>
					<h2>Tyrant Name</h2>
					<input
						id='GameInfoTyrant'
						type='text'
					/>
					<h2>Day Count</h2>
					<input
						id='GameInfoDayCount'
						type='number'
					/>
					<h2>Progress Points</h2>
					<input
						id='GameInfoProgPoints'
						type='number'
					/>
					<h2>Encounters Completed</h2>
					<input
						id='GameInfoEncountersCompleted'
						type='text'
					/>
					<h2>Encounters Remaining</h2>
					<input
						id='GameInfoEncountersRemaining'
						type='text'
					/>
					<h2>Loot Used</h2>
					<input
						id='GameInfoLootUsed'
						type='text'
					/>
					<h1>Character 1</h1>
					<p>Must have at least one character</p>
					<h2>Character Name</h2>
					<input
						id='CharInfoName1'
						type='text'
					/>
					<h2>Base Stats:</h2>
					<p>HP</p>
					<input
						id='CharInfoBaseHP1'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoBaseDEX1'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoBaseATK1'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoBaseDEF1'
						type='number'
					/>
					<h2>Stat Increases:</h2>
					<p>HP</p>
					<input
						id='CharInfoDiceHP1'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoDiceDEX1'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoDiceATK1'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoDiceDEF1'
						type='number'
					/>
					<h2>Skill Dice</h2>
					<input
						id='CharInfoDiceAcq1'
						type='text'
					/>
					<h2>Innate +1</h2>
					<input
						id='CharInfoInnate1'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharInfoCurrHP1'
						type='number'
					/>
					<h2>Loot</h2>
					<input
						id='CharInfoLoot1'
						type='text'
					/>
					<h2>Notes</h2>
					<p>Any extra notes, eg skill die that needs a specific value remembered</p>
					<input
						id='CharInfoNotes1'
						type='text'
					/>
					<h2>Locked Slots</h2>
					<input
						id='CharInfoLockedSlots1'
						type='text'
					/>
					<h2>Scars</h2>
					<input
						id='CharInfoScars1'
						type='text'
					/>
					<h2>Do you have a second character?</h2>
					<input
						id='CharInfo2'
						type='checkbox'
					/>
					<h1>Character 2</h1>
					<h2>Character Name</h2>
					<input
						id='CharInfoName2'
						type='text'
					/>
					<h2>Base Stats:</h2>
					<p>HP</p>
					<input
						id='CharInfoBaseHP2'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoBaseDEX2'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoBaseATK2'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoBaseDEF2'
						type='number'
					/>
					<h2>Stat Increases:</h2>
					<p>HP</p>
					<input
						id='CharInfoDiceHP2'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoDiceDEX2'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoDiceATK2'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoDiceDEF2'
						type='number'
					/>
					<h2>Skill Dice</h2>
					<input
						id='CharInfoDiceAcq2'
						type='text'
					/>
					<h2>Innate +1</h2>
					<input
						id='CharInfoInnate2'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharInfoCurrHP2'
						type='number'
					/>
					<h2>Loot</h2>
					<input
						id='CharInfoLoot2'
						type='text'
					/>
					<h2>Notes</h2>
					<p>Any extra notes, eg skill die that needs a specific value remembered</p>
					<input
						id='CharInfoNotes2'
						type='text'
					/>
					<h2>Locked Slots</h2>
					<input
						id='CharInfoLockedSlots2'
						type='text'
					/>
					<h2>Scars</h2>
					<input
						id='CharInfoScars2'
						type='text'
					/>
					<h2>Do you have a third character?</h2>
					<input
						id='CharInfo3'
						type='checkbox'
					/>
					<h1>Character 3</h1>
					<h2>Character Name</h2>
					<input
						id='CharInfoName3'
						type='text'
					/>
					<h2>Base Stats:</h2>
					<p>HP</p>
					<input
						id='CharInfoBaseHP3'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoBaseDEX3'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoBaseATK3'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoBaseDEF3'
						type='number'
					/>
					<h2>Stat Increases:</h2>
					<p>HP</p>
					<input
						id='CharInfoDiceHP3'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoDiceDEX3'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoDiceATK3'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoDiceDEF3'
						type='number'
					/>
					<h2>Skill Dice</h2>
					<input
						id='CharInfoDiceAcq3'
						type='text'
					/>
					<h2>Innate +1</h2>
					<input
						id='CharInfoInnate3'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharInfoCurrHP3'
						type='number'
					/>
					<h2>Loot</h2>
					<input
						id='CharInfoLoot3'
						type='text'
					/>
					<h2>Notes</h2>
					<p>Any extra notes, eg skill die that needs a specific value remembered</p>
					<input
						id='CharInfoNotes3'
						type='text'
					/>
					<h2>Locked Slots</h2>
					<input
						id='CharInfoLockedSlots3'
						type='text'
					/>
					<h2>Scars</h2>
					<input
						id='CharInfoScars3'
						type='text'
					/>
					<h2>Do you have a fourth character?</h2>
					<input
						id='CharInfo4'
						type='checkbox'
					/>
					<h1>Character 4</h1>
					<h2>Character Name</h2>
					<input
						id='CharInfoName4'
						type='text'
					/>
					<h2>Base Stats:</h2>
					<p>HP</p>
					<input
						id='CharInfoBaseHP4'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoBaseDEX4'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoBaseATK4'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoBaseDEF4'
						type='number'
					/>
					<h2>Stat Increases:</h2>
					<p>HP</p>
					<input
						id='CharInfoDiceHP4'
						type='number'
					/>
					<p>DEX</p>
					<input
						id='CharInfoDiceDEX4'
						type='number'
					/>
					<p>ATK</p>
					<input
						id='CharInfoDiceATK4'
						type='number'
					/>
					<p>DEF</p>
					<input
						id='CharInfoDiceDEF4'
						type='number'
					/>
					<h2>Skill Dice</h2>
					<input
						id='CharInfoDiceAcq4'
						type='text'
					/>
					<h2>Innate +1</h2>
					<input
						id='CharInfoInnate4'
						type='checkbox'
					/>
					<h2>Current HP</h2>
					<input
						id='CharInfoCurrHP4'
						type='number'
					/>
					<h2>Loot</h2>
					<input
						id='CharInfoLoot4'
						type='text'
					/>
					<h2>Notes</h2>
					<p>Any extra notes, eg skill die that needs a specific value remembered</p>
					<input
						id='CharInfoNotes4'
						type='text'
					/>
					<h2>Locked Slots</h2>
					<input
						id='CharInfoLockedSlots4'
						type='text'
					/>
					<h2>Scars</h2>
					<input
						id='CharInfoScars4'
						type='text'
					/>
					<br /><br />
					<a
						type="button"
						onClick={() => this.submitGame()}
						href={`data:text/json;charset=utf-8,${encodeURIComponent(
						JSON.stringify(this.state.game)
						)}`}
						download="game.json"
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

export default GameInfo