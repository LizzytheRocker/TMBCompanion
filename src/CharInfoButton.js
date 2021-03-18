import React from 'react'
import CharInfo from './CharInfo';

class CharInfoButton extends React.Component {
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
			<div className='CharInfoButton'>
				<div className="dropdown">
					<button className="dropbtn" onClick={this._showContent.bind(null, this.state.showContent ? false : true)}>Character Info</button>
					{ this.state.showContent && (<CharInfo />) }
				</div>
			</div>
		)
	}
}

export default CharInfoButton