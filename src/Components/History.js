

import React from 'react';
import { Pagination ,  Table , Row , Col} from 'react-materialize';
import Moment from 'react-moment';
import Net from '../Services/NetService';
import './History.css';


export default class GameHistory extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			turns:[],
			page:0,
			pages:null

		}
		this.NetService = new Net();
		this.load(this.state.page);

	}

	changePage(p){
		this.setState({page:p})
		this.load(p)
	}


	load(page){
		let url = 'http://localhost:3001/turns/'+page;
		this.NetService.get(url)
		.then(({data, total}) =>{
		  if(total){
		 	this.setState({turns:data, pages: Math.ceil(total[0].count / 10) })
		  }
		})

	}

	render(){

		let data = this.state.turns;
		let headers = Object.keys(data[0] || {}).map((key,index) =>{
			return(<th key={index}>{key}</th>)
		})
		let cards = data.map((item,index) => {
			return(<tr className="flex-row" key={index}>
				{Object.keys(item).map((k, ind) => {
					if(k === 'date')
							return <td key={ind}><Moment format="DD-MM-YYYY HH:mm">{item[k]}</Moment></td>
					else if(Array.isArray(item[k])){
							return <td key={ind}>{item[k].join(" | ")}</td>
					}
					return <td key={ind}>{item[k]}</td>

				})}
			</tr>)
		})

		return(
			<div className="container">
				<Row>
					<Col s={12}>
						<h2>History Page</h2>
					</Col>
				</Row>
				<Table>
					<thead>
						<tr>{headers}</tr>
					</thead>
					<tbody>
						{cards	}
					</tbody>
				</Table>
				{this.state.pages ? (<Pagination activePage={this.state.page + 1} items={this.state.pages} maxButtons={3} onSelect={(p) => this.changePage(p-1)} />):(null)}

			</div>
			)
	}
}