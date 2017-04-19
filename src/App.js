import React from 'react';
import {
		BrowserRouter as Router,
		Route
		} 
from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';
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
				<Route render={()=>(
					typeof username !== 'undefined' && typeof username !== null
					?
					<Quiz />
					: 
					<User />
				)} />
				<Route path='/username' component={User} />
				<Route path='/quiz' component={Quiz} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
		</Router>

	)
}
