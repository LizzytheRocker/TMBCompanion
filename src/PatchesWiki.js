import React from 'react'
import "./styles.css";
import patchespg1 from './img/patches-pg1.jpg'
import patchespg2 from './img/patches-pg2.jpg'

class PatchesWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='PatchesWiki'>
				<br></br>
				<h1>Patches Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/512c9mv5qckcrka/TMB_CS_Patches_v2.1.pdf">Download the Patches reference sheet here</a>
				<br></br>

				<img class="resize" src={patchespg1}/>
				<img class="resize" src={patchespg2}/>
			</div>
		)
	}
}

export default PatchesWiki