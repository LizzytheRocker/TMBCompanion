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

				<img src={boomerpg1}/>
				<img src={boomerpg2}/>
			</div>
		)
	}
}

export default BoomerWiki