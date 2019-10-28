import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar ,  NavItem} from 'react-materialize';
import LinkButton from '../Components/LinkButton';
import GameHistory from '../Components/History';
import LibraryGames from '../Games'

import Games from '../Pages/Games'


export default class AppRouter extends React.Component{


	render(){
		return(
			<div>
				<Router>

					<Navbar className="  deep-purple darken-1"  alignLinks="right">
						<NavItem>
							<LinkButton aria-label="Menu" to='/'>Games</LinkButton>
						</NavItem>
						<NavItem>
							<LinkButton to='/history/' >History</LinkButton>
						</NavItem>
					</Navbar>
					<Route path="/" exact component={Games} />
					<Route path="/history/" component={GameHistory} />
					<Route path="/games/:id"  component={CheckGameComponent}/>
        		</Router>
			</div>
			)
	}
}


function CheckGameComponent(props){
	let Componet =LibraryGames[props.match.params.id] 
	return <Componet />
}