import React from 'react'
import "./styles.css";
import dusterpg1 from './img/duster-pg1.jpg'
import dusterpg2 from './img/duster-pg2.jpg'

class DusterWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='DusterWiki'>
				<br></br>
				<h1>Duster Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/rzbzlacmfpt9wpc/TMBU_CS_Duster_v2.1.pdf">Download the Duster reference sheet here</a>
				<br></br>

				<img class="resize" src={dusterpg1}/>
				<img class="resize" src={dusterpg2}/>
			</div>
		)
	}
}

export default DusterWiki