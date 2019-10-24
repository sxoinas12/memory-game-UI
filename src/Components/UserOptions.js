

import React from 'react';
import {Button,  RadioGroup ,CardPanel  , Row, Col} from 'react-materialize';
export default class UserOptions extends React.Component {
	

	render(){
		console.log(this.props)
		return(
			<Row>
				<Col m = {12}>
					<CardPanel className=" blue accent-1">
						<Row className="description" style={{"marginLeft":"200px","marginRight":"200px"}}>
							<Col m ={12}>
							<span className="white-text" style={{"fontFamily":"Helvetica"}}>
								<h4>Welcome to the Memory game</h4>
								<p>
									This is a game with cards and its main purpose is to increase brain memory while at the same time 
									having fun.First you must select a number of cards to play with. After that you can look at them for 
									as long as you need in order to memorize them. Then, after you click on the "play" button the 
									cards will flip around and you have to unflip them one by one in an Ascending order.
								</p>
								<p>
									<b>Select the amount of cards and then click on the "Start" button to begin</b>
								</p>
							</span>
							</Col>
						</Row>
						<Row>
							<Col m={12}>
								<RadioGroup
								  radioClassNames="white-text"
								  name="size"
								  label="T-Shirt Size"
								  value = {this.props.playerSelection}
								  onChange = { (e) => 	this.props.SelectCards(e.target.value) }
								  options={[{label: '4',value: '4'},{label: '8',value: '8'},{label: '12',value: '12'}]}
								/>	
							</Col>
						</Row>
						<Row>
							<Col m={12}>
								<Button type="submit" className="blue" waves="light" onClick={() => this.props.StartGame()}>
									Start
								</Button>
							</Col>
						</Row>
					</CardPanel>
				</Col>
			</Row>
			)
	}
}