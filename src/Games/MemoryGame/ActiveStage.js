import React from 'react';
import {Button , CardPanel  , Row, Col} from 'react-materialize';
import List from '../../Components/List';
export default class ActiveStage extends React.Component{
	

	render(){
		return(
			<CardPanel className=" blue accent-1">
				<Row>
					<Col m ={12}>
					<span className="white-text" style={{"fontFamily":"Helvetica"}}>
						Whenever you are ready click the <b>"Play"</b> to start
					</span>
					</Col>
				</Row>
				<Row>
					<Col s={12} m = {12}>
						<List cards = {this.props.cards} onFlip = {(key) => this.props.unFlip(key)} />
					</Col>
				</Row>
				<Row>
					<Button type="submit" waves="light" className="blue" onClick={() => this.props.FlipCards()}>
						Play
					</Button>
				</Row>
			</CardPanel>
			)
	}
}