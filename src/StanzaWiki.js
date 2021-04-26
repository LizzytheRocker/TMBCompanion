import React from 'react'
import "./styles.css";
import stanzapg1 from './img/stanza-pg1.jpg'
import stanzapg2 from './img/stanza-pg2.jpg'

class StanzaWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='StanzaWiki'>
				<br></br>
				<h1>Stanza Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/mvnc1qt92cptv5b/TMBU_CS_Stanza_v2.1.pdf">Download the Stanza reference sheet here</a>
				<br></br>

				<img class="resize" src={stanzapg1}/>
				<img class="resize" src={stanzapg2}/>
			</div>
		)
	}
}

export default StanzaWiki