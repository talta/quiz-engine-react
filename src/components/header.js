import React from 'react';

import header from './css/header.css';


export default class Header extends React.Component{
	render(){
		return (
			<header >
				<ul className={header.topnav}>
					<li> TALTA's Quiz Engine </li>
					<li><a className={header.active} href="#home">Home</a></li>
  					<li><a href="#news">News</a></li>
  					<li><a href="#contact">Contact</a></li>
  					<li className={header.right}><a href="#about">About</a></li>
				</ul>
			</header>
		)
	}
}