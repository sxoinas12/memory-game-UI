import React from 'react';
import Net from '../../Services/NetService';
import Playground from './Playground';

export default class LookGame extends React.Component {
	constructor(){
		super()
		this.state = {
			cards:[],
			GameState:0
		}
		this.NetService = new Net();
		
	}

	changeGameState(state){
		this.setState({GameState:state});
		this.forceUpdate();
	}


	render(){
		switch(this.state.GameState){
			default:
			case 0:
				return <Playground GameState = {this.state.GameState} GameWin = {(state) => this.changeGameState(state)}/>

			case 1:
				return <div> You won </div>
		}
		
	}
}