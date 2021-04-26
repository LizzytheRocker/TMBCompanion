import React from 'react'
import "./styles.css";
import picketpg1 from './img/picket-pg1.jpg'
import picketpg2 from './img/picket-pg2.jpg'

class PicketWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='PicketWiki'>
				<br></br>
				<h1>Picket Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/y7yjx78vkit7ys1/TMB_CS_Picket_v2.1.pdf">Download the Picket reference sheet here</a>
				<br></br>

				<img class="resize" src={picketpg1}/>
				<img class="resize" src={picketpg2}/>
			</div>
		)
	}
}

export default PicketWiki