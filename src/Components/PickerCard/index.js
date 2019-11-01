import React from 'react';
import {Row,Col ,Card} from 'react-materialize';
import './index.css';
import { BrowserRouter as Link } from "react-router-dom";

import { withRouter } from 'react-router'
class PickerCard extends React.Component {

	constructor(props){
		super(props)
	}

	playGame(e,Gname){
		this.props.history.push(`/games/${Gname}`)
	}

	render(){
		return(
				<Col s={6}  >
					<Card
					  className="blue-grey darken-1 custom"
					  textClassName="white-text"
					  title={this.props.name}
					  actions={[<a className="btn btn-play" onClick={(e) => this.playGame(e,this.props.name)}>Play</a> ]}
					>
					</Card>
				</Col>
			
			)
	}

}


export default withRouter(PickerCard)