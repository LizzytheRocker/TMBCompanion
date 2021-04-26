import React from 'react'
import "./styles.css";
import dartpg1 from './img/dart-pg1.jpg'
import dartpg2 from './img/dart-pg2.jpg'

class DartWiki extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='DartWiki'>
				<br></br>
				<h1>Dart Wiki</h1>
				<br></br>
				<a href="https://www.dropbox.com/s/26wywuakuwhb3q1/Dart_Character Sheet.pdf">Download the Dart reference sheet here</a>
				<br></br>

				<img class="resize" src={dartpg1}/>
				<img class="resize" src={dartpg2}/>
			</div>
		)
	}
}

export default DartWiki