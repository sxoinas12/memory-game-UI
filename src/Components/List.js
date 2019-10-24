import React  from 'react';
import {Col} from 'react-materialize';
import CardModule from './Card';

export default class CardList extends React.Component{
	
	flipCard (key) {
		this.props.onFlip(key)
	}
	render(){
		let items =this.props.cards || {}
		const cards = items.map((item,index) => {
			return (
				<Col m={3} s={4} key={index} className="center-align" style={{"height":"110px"}}>
					<CardModule id= {index} isFlipped = { item.isFlipped } number = { item.value } onFlip = {(id) => this.flipCard(id)} />
				</Col>
			
			)
		})

		return(
			<div>
				{cards}
			</div>


			)
	}
}