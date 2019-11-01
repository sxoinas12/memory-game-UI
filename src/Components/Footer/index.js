import React from 'react';
import {Row , Footer} from 'react-materialize';
import './index.css';
export default class FooterComp extends React.Component {
	constructor(){
		super()
	}


	render(){
		return(
			<Footer
			  copyrights={<div>&copy; Konstantinos Schoinas</div>}
			 
			  className="footer-main"
			>
			<div className="white-text">
			Footer Content
			</div>
			</Footer>

			)
	}
}