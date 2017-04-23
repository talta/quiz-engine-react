import React from 'react';
import {Link} from 'react-router-dom';

import styles from './css/header.css';
import {connect} from 'react-redux';


export  class Header extends React.Component{
	render(){
		return (
			<header >
				<ul className={styles.topnav}>
					<li className={styles.topnav}>
					 TALTA's Quiz Engine 
					</li>
					<li className={styles.topnav}>
						<Link to='/welcome'>
							Home
						</Link>
					</li>
  					<li className={styles.right}>{this.props.username}
  					</li>
  					<li className={styles.right}>
  						<a className={styles.topnav} href="https://github.com/talta/quiz-engine-react">About</a>
  					</li>
				</ul>
			</header>
		)
	}
}


const mapStateToProps= state=>({
	username: state.userReducer.username
});

export default connect(mapStateToProps)(Header);




////old links:
  					// <li className={styles.topnav}><a className={styles.topnav} href="#news">News</a>
  					// </li>
  					// <li className={styles.topnav}><a className={styles.topnav} href="#contact">Contact</a>
  					// </li>