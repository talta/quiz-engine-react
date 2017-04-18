import React from 'react';

import styles from './css/header.css';


export default class Header extends React.Component{
	render(){
		return (
			<header >
				<ul className={styles.topnav}>
					<li className={styles.topnav}> TALTA's Quiz Engine </li>
					<li className={styles.topnav}><a className={styles.active} href="#home">Home</a></li>
  					<li className={styles.topnav}><a className={styles.topnav} href="#news">News</a></li>
  					<li className={styles.topnav}><a className={styles.topnav} href="#contact">Contact</a></li>
  					<li className={styles.right}><a href="#about">About</a></li>
				</ul>
			</header>
		)
	}
}