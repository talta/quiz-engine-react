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
		this.username = null;
		this.usernameExists = false;
	}

	componentWillMount(){
		this.username = loadState();
		this.usernameExists = (typeof this.username !== 'undefined' && this.username !== null) 
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
						if(this.usernameExists){
							console.log('user found');
							return(
								<Route path='/welcome' component={Welcome} />
							)
						}else{
							console.log('the user component should display');
							return(
								<Redirect to='/username' component={User}/>
							)
						}
					}}/>					
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




///other things tried:

		// let firstPage = null;

		// this.state = {isLoggedIn: false};
		// if(this.state.usernameExists){
		// 	console.log('if statement entered');
		// 	firstPage = <Redirect to='/username' />
		// }else {
		// 	console.log('the else statement triggered');
		// 	firstPage = <Redirect to='/welcome' />
		// 	console.log(firstPage);
		// }
			// firstPage = <User />
			// firstPage = <Route path='/username' component={User} />


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