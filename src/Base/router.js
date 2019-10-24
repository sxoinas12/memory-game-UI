import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar ,  NavItem} from 'react-materialize';
import LinkButton from '../Components/LinkButton';
import Game from '../Components/Game';
import GameHistory from '../Components/History';



export default class AppRouter extends React.Component{


	render(){
		return(
			<div>
				<Router>

					<Navbar className="  deep-purple darken-1"  alignLinks="right">
						<NavItem>
							<LinkButton aria-label="Menu" to='/'>Game</LinkButton>
						</NavItem>
						<NavItem>
							<LinkButton to='/history/' >History</LinkButton>
						</NavItem>
					</Navbar>
					<Route path="/" exact component={Game} />
					<Route path="/history/" component={GameHistory} />
        		</Router>
			</div>
			)
	}
}