import React from 'react';
import PickerCard from '../../Components/PickerCard/';
import LibraryGames from '../../Games'

import {Row,Col ,Card} from 'react-materialize';
export default class Games extends React.Component{
	constructor(props){
		super(props)
	}

	render() {

		let games = Object.keys(LibraryGames).map((key,index) => <PickerCard key={index} name={key} />)
		return(
			<div className="container">
			<Row>
				{games}
			</Row>
			</div>
		)
	}

}