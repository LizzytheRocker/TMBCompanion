import React from 'react'
import CampaignInfo from './CampaignInfo';

class CampaignInfoButton extends React.Component {
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
			<div className='CampaignInfoButton'>
				<div className="dropdown">
					<button className="dropbtn" onClick={this._showContent.bind(null, this.state.showContent ? false : true)}>Campaign Info</button>
					{ this.state.showContent && (<CampaignInfo />) }
				</div>
			</div>
		)
	}
}

export default CampaignInfoButton