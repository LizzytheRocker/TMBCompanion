import React from 'react'
import CharSelect from './CharSelect';

class CharSelectButton extends React.Component {
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
			<div className='CharSelectButton'>
				{/* <h2>Character Selection</h2>
				<p>Select the character that you want to add to the campaign.</p> */}
				<div className="dropdown">
					<button className="dropbtn" onClick={this._showContent.bind(null, this.state.showContent ? false : true)}>Character Selection</button>
					{ this.state.showContent && (<CharSelect />) }
					
					{/* <div className="dropdown-content">
						<a href="#">Boomer</a>
						<a href="#">Duster</a>
						<a href="#">Ghillie</a>
						<a href="#">Nugget</a>
						<a href="#">Patches</a>
						<a href="#">Picket</a>
						<a href="#">Stanza</a>
						<a href="#">Tantrum</a>
						<a href="#">Tink</a>
					</div> */}
				</div>
			</div>
		)
	}
}

export default CharSelectButton