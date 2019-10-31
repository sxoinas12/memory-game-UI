import React from 'react';
import {Button} from 'react-materialize';
import Net from '../../Services/NetService';
import UserOptions from './UserOptions';
import ActiveStage from './ActiveStage';

export default class Game extends React.Component {
	constructor(props){
		super(props)
		this.NetService = new Net()
		this.state = {
			playerSelection:null,
			GameMode:0,// [ 0 - 1- 2 - 3] [ Init - GameOn - Win - Lose]
 			cards:[],
			OpenedCards:[],
		}
		
	}

	reset() {
		this.setState({
			playerSelection:null,
			GameMode:0,// [ 0 - 1- 2 - 3] [ Init - GameOn - Win - Lose]
 			cards:[],
			OpenedCards:[]
		})
	}

	saveTurn(OpenedCards){
		let url = '/save'
		this.NetService.post(url,{cards:this.state.cards,OpenedCards:OpenedCards})
		.then((data) => console.log("Its saved"))
		.catch((e) => console.log("Problem with saving turn"))

	}


	StartGame(){
		let url = '/init'
		this.NetService.post(url,{cards:this.state.playerSelection})
		.then((data) => {
			let cards = data.map((item) => {
				return {
					value:item,
					isFlipped:true
				}
			});
			this.setState({cards})
			this.setState({GameMode:1})
		})
		.catch((e) => console.log("Reqeustes failed"))
	}


	selectCards(value){
		this.setState({playerSelection:value})
	}

	FlipCards(){
		let cards = this.state.cards;
		cards.map((item) => item.isFlipped = false)
		this.setState(cards)
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

	checkGameOver(SelectedCard) {
		let cards = this.state.cards; // [ ]
		for(var i in cards){
			if(!cards[i].isFlipped && cards[i].value < SelectedCard.value){	
				return true;
			}
		}
	}

	unFlip(key){
		let cards = this.state.cards; // [ ] 
		cards[key].isFlipped = true;
		this.forceUpdate();
	}

	cardSelected(key) {
		let OpenedCards = this.state.OpenedCards;
		let cards = this.state.cards; // [ ]
		OpenedCards.push(cards[key]);
		this.unFlip(key);
		this.setState({OpenedCards})
		if(this.checkWin()) {
			this.setState({ GameMode: 2 });
			this.saveTurn(OpenedCards);

		} else if(this.checkGameOver(cards[key])){
			this.setState({ GameMode: 3 });
			this.saveTurn(OpenedCards);
		}

	}

	render(){
		let PlayAgain = <Button className=" blue" onClick = { () => this.reset()}>Play again</Button>;
		switch(this.state.GameMode){
			default:
			case 0:
				return <UserOptions StartGame = {() => this.StartGame()} SelectCards = {(value) => this.selectCards(value)} playerSelection={this.state.playerSelection}  />
			case 1:
				return <ActiveStage cards = {this.state.cards } unFlip= {(key) => this.cardSelected(key)}  FlipCards = { () => this.FlipCards()}/>
			case 2: return (
				<div>
					<h3><b> Congratulations you won </b></h3> 
					{PlayAgain}
				</div>
				)
			case 3: return(
				<div>
					<div>
						<h3><b> Sorry, but you Lost. Do you want to try again?</b></h3> 
						{PlayAgain}
					</div>
				</div>

				)

			
		}

	}
}
