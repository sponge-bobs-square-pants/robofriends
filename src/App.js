import React from 'react';
import CardList from './CardList';
import { Robots } from './robots';
import Searchbox from './Searchbox';
import Scroll from './Scroll'


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots:users}))
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
				<Scroll>
				<CardList Robots = { filteredRobots } />
				< /Scroll>
			</div>
		);
	}
}

export default App;