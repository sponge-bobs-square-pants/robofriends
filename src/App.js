import React from 'react';
import CardList from './CardList';
import { Robots } from './robots';
import Searchbox from './Searchbox';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: Robots,
			searchfield: '',
		}
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}
	render() {
		const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase())
		})
		return(
			<div className="tc">
				<h1>RoboFriends</h1>
				<Searchbox SearchChange = {this.onSearchChange}/>
				<CardList Robots = { filteredRobots } />
			</div>
		);
	}
}

export default App;