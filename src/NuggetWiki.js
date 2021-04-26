import React from 'react'
import "./styles.css";
import nuggetpg1 from './img/nugget-pg1.jpg'
import nuggetpg2 from './img/nugget-pg2.jpg'

class NuggetWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='NuggetWiki'>
				<br></br>
				<h1>Nugget Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/9scip51udrbktfv/TMB_CS_Nugget_v2.1.pdf">Download the Nugget reference sheet here</a>
				<br></br>

				<img class="resize" src={nuggetpg1}/>
				<img class="resize" src={nuggetpg2}/>
			</div>
		)
	}
}

export default NuggetWiki