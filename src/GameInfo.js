import React from 'react'
import Game from './Game.js';

class GameInfo extends React.Component {
	constructor() {
		super();
		this.state = { game: new Game }
		this.state.game.name = 'test'
	}

	async submitGame() {
		this.state.game.save_name = document.getElementById('GameInfoName').value;
		this.state.game.tyrant = document.getElementById('GameInfoTyrant').value;
		this.state.game.day_count = Number(document.getElementById('GameInfoDayCount').value);
		this.state.game.progress_points = Number(document.getElementById('GameInfoProgPoints').value);
		this.state.game.encounters_completed = document.getElementById('GameInfoEncountersCompleted').value;
		this.state.game.encounters_remaining = document.getElementById('GameInfoEncountersRemaining').value;
		this.state.game.loot_used = document.getElementById('GameInfoLootUsed').value;
		this.state.game.characters = document.getElementById('GameInfoCharacters').value;
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
				document.getElementById('GameInfoCharacters').value = tmp.characters;
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
					<h2>Characters</h2>
					<input
						id='GameInfoCharacters'
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

export default GameInfo