import React from 'react';

const Search = ({ SearchChange }) => {
	return(
		<div>
			<input className = "pa3 ba b--green bg-lightest-blue"placeholder = "enter the name" type="Search" onChange = {SearchChange}/>
		</div>
	);
}

export default Search;