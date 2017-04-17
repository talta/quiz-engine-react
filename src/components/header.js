import React from 'react';

import header from './css/header.css';


export default class Header extends React.Component{
	render(){
		return (
			<header >
				<ul className='topnav'>
					<li> TALTA's Quiz Engine </li>

				</ul>
			</header>
		)
	}
}