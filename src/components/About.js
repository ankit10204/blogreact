import React from 'react';
import {withRouter} from 'react-router-dom';

export default function About(props){
	const user = localStorage.getItem('user');
	console.log(user);

	return(
     <h1>This is About</h1>
	)
} 