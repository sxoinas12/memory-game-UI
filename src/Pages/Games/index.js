import React from 'react';
import PickerCard from '../../Components/PickerCard/';
import LibraryGames from '../../Games'


export default class Games extends React.Component{
	constructor(props){
		super(props)
	}

	render() {

		let games = Object.keys(LibraryGames).map((key,index) => <PickerCard key={index} name={key} />)
		return(
			<div>
				{games}
			</div>
		)
	}

}