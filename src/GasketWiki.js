import React from 'react'
import "./styles.css";
import gasketpg1 from './img/gasket-pg1.jpg'
import gasketpg2 from './img/gasket-pg2.jpg'

class GasketWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='GasketWiki'>
				<br></br>
				<h1>Gasket Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/0a9zfnj6tircoq0/TMBU_CS_Gasket_v2.1.pdf">Download the Gasket reference sheet here</a>
				<br></br>

				<img class="resize" src={gasketpg1}/>
				<img class="resize" src={gasketpg2}/>
			</div>
		)
	}
}

export default GasketWiki