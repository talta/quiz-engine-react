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

export default class App extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		const username = loadState();
		console.log(username, 'username');
		console.log(typeof username);
		const usernameExists = (typeof username !== 'undefined' && username !== null) 
		console.log(usernameExists, 'username exists');
	}
	

	render(){
		return(
			<Router>
			<div className="app">
				<header>
					<Header />

				</header>
				<main>
					
					<Route history={browserHistory} render={(usernameExists)=>{
						console.log(usernameExists);
						if(usernameExists){
							console.log('user found');
							return(
								<Route path='/welcome' component={Welcome} />
							)
						}
						else{
							console.log('the user component should display');
							<Route path='/username' component={User} />
						}
					}
					}
					 />
					<Route path='/quiz' component={Quiz} />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
			</Router>

		)
	}
}

// ////other futile attempts:
// usernameExists ? <Welcome /> : <User />

// 	const usernameExists = (typeof username !== 'undefined' && username !== null) 

//////this needs to be cleaned up:
				// <Route history={browserHistory} render={()=>(
				// 	typeof username !== 'undefined' && username !== null
				// 	?
				// 	<Quiz />
				// 	: 
				// 	<User />
				// )} />
				// <Route path='/username' component={User} />
				// <Route path='/welcome' component={Welcome} />
				// <Route path='/quiz' component={Quiz} />