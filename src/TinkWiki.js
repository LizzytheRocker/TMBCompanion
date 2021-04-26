import React from 'react'
import "./styles.css";
import tinkpg1 from './img/tink-pg1.jpg'
import tinkpg2 from './img/tink-pg2.jpg'

class TinkWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='TinkWiki'>
				<br></br>
				<h1>Tink Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/qdw0ti9tstrf5r2/TMB_CS_Tink_v2.1.pdf">Download the Tink reference sheet here</a>
				<br></br>

				<img class="resize" src={tinkpg1}/>
				<img class="resize" src={tinkpg2}/>
			</div>
		)
	}
}

export default TinkWiki