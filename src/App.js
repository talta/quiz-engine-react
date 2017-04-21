import React from 'react';
import {
		BrowserRouter as Router,
		Route,
		browserHistory,
		Redirect
		} 
from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';
import Welcome from './components/welcome';
import {loadState} from './helpers/localStorage';

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {isLoggedIn: false};
		this.username = null;
		this.usernameExists = false;
	}

	componentWillMount(){
		this.username = loadState();
		console.log(this.username, 'username');
		console.log(typeof this.username);
		this.usernameExists = (typeof this.username !== 'undefined' && this.username !== null) 
		console.log(typeof this.usernameExists, 'username exists')
		console.log(this.usernameExists, 'username exists');
	}
	

	render(){
		let firstPage = null;

		if(this.state.usernameExists){
			console.log('if statement entered');
			// firstPage = <User />
			// firstPage = <Route path='/username' component={User} />
			firstPage = <Redirect to='/username' />
		}else {
			console.log('the else statement triggered');
			// firstPage = <Welcome />
			// firstPage = <Route path='/welcome' component={Welcome} />
			firstPage = <Redirect to='/welcome' />
			console.log(firstPage);
		}


		return(
			<Router>
			<div className="app">
				<header>
					<Header />
				</header>
				<main>
					<Route history={browserHistory} render={(usernameExists)=>{
						console.log(this.usernameExists);
						console.log(typeof this.usernameExists, 'usernmane exists type');
						if(this.usernameExists){
							console.log('user found');
							return(
								<Route path='/welcome' component={Welcome} />
								// {firstPage}
							)
						}else{
							console.log('the user component should display');
							return(
								<Redirect to='/username' component={User}/>
								// {firstPage}
							)
						}
					}
					}
 					/>					
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
}


///the one that works with Victor:




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