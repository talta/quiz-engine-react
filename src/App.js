import React from 'react';
import {
		BrowserRouter as Router,
		Route,
		browserHistory
		} 
from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';
import Welcome from './components/welcome';
import { loadState} from './helpers/localStorage';


export default function App(props){
	
	const username = loadState();
	console.log(username, 'username');


	return(
		<Router>
		<div className="app">
			<header>
				<Header />
			</header>
			<main>
				<Route history={browserHistory} render={()=>(
					typeof username !== 'undefined' && username !== null
					?
					<Welcome />
					: 
					<User />
				)} />
				<Route path='/username' component={User} />
				<Route path='/welcome' component={Welcome} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
		</Router>

	)
}
