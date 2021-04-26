import React from 'react'
import "./styles.css";
import tantrumpg1 from './img/tantrum-pg1.jpg'
import tantrumpg2 from './img/tantrum-pg2.jpg'

class TantrumWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='TantrumWiki'>
				<br></br>
				<h1>Tantrum Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/icbjvpir1bk8501/TMB_CS_Tantrum_v2.3.pdf">Download the Tantrum reference sheet here</a>
				<br></br>

				<img class="resize" src={tantrumpg1}/>
				<img class="resize" src={tantrumpg2}/>
			</div>
		)
	}
}

export default TantrumWiki