import React from 'react';
import {Button ,Card} from 'react-materialize';




export default class CardModule extends React.Component{


	render(){
		return(
			
			  
			 <Card style={{"width":"110px","margin":"auto","height":"80px"}}
			  className="blue-grey darken-1"
			  textClassName="white-text"
			   
			  >
			  {this.props.isFlipped ?(
				
			  	this.props.number
			  	):(	
			  	<Button className="deep-purple darken-1" onClick = { (e) => this.props.onFlip(this.props.id)}>
					Flip
				</Button>
				) }
			
			</Card>

			)
	}
}