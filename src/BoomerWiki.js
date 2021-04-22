import React from 'react'
import boomerpg1 from './img/boomer-pg1.jpg'
import boomerpg2 from './img/boomer-pg2.jpg'

class BoomerWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='BoomerWiki'>
				<br></br>
				<h1>Boomer Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/kg6rnmrrpc66nf4/TMB_CS_Boomer_v2.2.pdf">Download the boomer reference sheet here</a>
				<br></br>

				<img src={boomerpg1}/>
				<img src={boomerpg2}/>
			</div>
		)
	}
}

export default BoomerWiki