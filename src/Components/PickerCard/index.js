import React from 'react';

import {Row,Col ,Card} from 'react-materialize';
import './index.css';

export default class PickerCard extends React.Component {

	constructor(props){
		super(props)
	}

	playGame(e,Gname){
		window.location = `/games/${Gname}`
	}

	render(){
		return(
			<Row>
				<Col>
					<Card
					  className="blue-grey darken-1 custom"
					  textClassName="white-text"
					  title={this.props.name}
					  actions={[<a className="btn btn-play" key={this.props.name} onClick= {(e) => this.playGame(e,this.props.name)}>Play</a>]}
					>
					</Card>
				</Col>
			</Row>
			)
	}

}