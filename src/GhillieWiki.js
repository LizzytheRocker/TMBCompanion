import React from 'react'
import "./styles.css";
import ghilliepg1 from './img/ghillie-pg1.jpg'
import ghilliepg2 from './img/ghillie-pg2.jpg'

class GhillieWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='GhillieWiki'>
				<br></br>
				<h1>Ghillie Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/nz61h41wkfyjare/TMB_CS_Ghillie_v2.1.pdf">Download the Ghillie reference sheet here</a>
				<br></br>

				<img class="resize" src={ghilliepg1}/>
				<img class="resize" src={ghilliepg2}/>
			</div>
		)
	}
}

export default GhillieWiki