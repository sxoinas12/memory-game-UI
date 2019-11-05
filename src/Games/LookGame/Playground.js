import React from 'react';
import Net from '../../Services/NetService';
import List from '../../Components/List';
import {Button , CardPanel  , Row, Col} from 'react-materialize';

export default class Playground extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			cards:[],
			activeCard:{}
		}
		this.NetService = new Net();
		this.onLoad();
	}

	setup(cards) {
		return cards.map((val) => {
			let card = {
				isFlipped:false,
				value:val
			}
			return card;
		})
	}

	onLoad(){
		this.NetService.get('/lookgame/init')
		.then((data) => {
			let cards = this.setup(data);
			this.setState({cards})
		})
		.catch((e) => alert(e))
	}	

	unFlip(key){
		let cards = this.state.cards; 
		cards[key].isFlipped = true;
		this.forceUpdate();	
		setTimeout(() => {
			this.checkPair(key,cards[key])

			if(this.checkWin()){
				console.log("Do i ever come")
				this.props.GameWin(1)
			}},700)
	}

	checkWin(){
		let cards = this.state.cards;
		for(var i in cards){
			if(!cards[i].isFlipped){
				return false;
			}
		}
		return true;
	}


	checkPair(key,card){
		let activeCard = this.state.activeCard;
		let cards = this.state.cards;
		if(Object.entries(activeCard).length === 0 && activeCard.constructor === Object){			
			activeCard = {key:key,...card}
			this.setState({activeCard})
			return true;
		}
		else {
			if(card.value === activeCard.value){
				activeCard = {}
				this.setState({activeCard})
				return true;
				
			}else{
				setTimeout(() =>{
					cards[key].isFlipped = false;
					cards[activeCard.key].isFlipped = false;
					activeCard = {}
					this.setState({activeCard})
					this.setState({cards:cards})
					this.forceUpdate()
				}, 400);
			}
		}
	}

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
						<List cards = {this.state.cards} onFlip = {(key) => this.unFlip(key)} />
					</Col>
				</Row>
				
			</CardPanel>		
		)
	}
}