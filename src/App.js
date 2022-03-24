import React from 'react';
import CardList from './CardList';
import { Robots } from './robots';
import Searchbox from './Searchbox';

const App = () => {
	return(
		<div className="tc">
			<h1>RoboFriends</h1>
			<Searchbox />
			<CardList Robots = { Robots } />
		</div>
	);
}

export default App;