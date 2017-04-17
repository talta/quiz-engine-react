import React from 'react';

import styles from './css/header.css';


export default class Header extends React.Component{
	render(){
		return (
			<header >
				<ul className={styles.topnav}>
					<li> TALTA's Quiz Engine </li>
					<li><a className={styles.active} href="#home">Home</a></li>
  					<li><a href="#news">News</a></li>
  					<li><a href="#contact">Contact</a></li>
  					<li className={styles.right}><a href="#about">About</a></li>
				</ul>
			</header>
		)
	}
}