import React from 'react';
import Card from './Card'

const CardList = ({ Robots }) => {
	
	const AllCards = Robots.map((user, i) => {
		// return <Card key = {i} id = {user.id} name = {user.name} email = {user.email} />
		return <Card key = {i} id = {Robots[i].id} name = {Robots[i].name} email = {Robots[i].email}/>
	})
	return(
		<div>
			{AllCards};
        </div>
	);
}

export default CardList;