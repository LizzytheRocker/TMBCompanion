import React from 'react'
import GameInfo from './GameInfo';

class GameInfoButton extends React.Component {
	constructor() {
		super();
		this.state = { showContent: false }
	}

	_showContent = (bool) => {
    this.setState({
      showContent: bool
    });
  }

	render () {
		return (
			<div className='GameInfoButton'>
				<div className="dropdown">
					<button className="dropbtn" onClick={this._showContent.bind(null, this.state.showContent ? false : true)}>Game Info</button>
					{ this.state.showContent && (<GameInfo />) }
				</div>
			</div>
		)
	}
}

export default GameInfoButton