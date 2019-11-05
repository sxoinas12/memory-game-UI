import React from 'react';
import {Button ,Card} from 'react-materialize';
import './index.css'

const Animation = {
  transform: 'rotateY(180deg)',
  color: 'red'
}

export default class CardModule extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			class:""
		}
	}

	componentDidUpdate(){
		let activeRotation = document.getElementById("card-s")
		let state = this.state.class;
		if( state === 'card-side-active' && !this.props.isFlipped){
			 this.setState({class:""})
		}
	}

	showCard(id,e){
		this.setState({class:"card-side-active"})
		this.props.onFlip(this.props.id)
	}

	render(){
		return(
			 <div className="mycard" key={this.props.key}>
			 <Card 
			  id="card-s"
			  className={"blue-grey darken-1 card-side " + this.state.class}
			  textClassName="white-text"
			  >
			  {this.props.isFlipped ?(
			  	<div className="card-back">{this.props.number}</div>
			  	):(	
			  	<Button className="deep-purple darken-1" 
			  	onAnimationEnd = { (e) =>console.log("DO i ever get called") }
			  	onClick = { (e) =>  this.showCard(this.props.id,e)}
			  	>
					Flip
				</Button>
				) }
			
			</Card>
			</div>

			)
	}
}