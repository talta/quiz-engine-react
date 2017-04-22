import React from 'react';
import {
		BrowserRouter as Router,
		Route,
		// browserHistory,
		// Redirect,
		Switch
		} 
from 'react-router-dom';

// import PrivateRoute from './components/private-route';
import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import DeleteStorage from './helpers/delete-storage';
import User from './components/user';
import Welcome from './components/welcome';
// import {loadStorage} from './helpers/localStorage';
import {connect} from 'react-redux';
// import {saveUser} from './actions';


export class App extends React.Component{

	constructor(props){
		super(props);
		this.username = null;
		this.usernameExists = false;
	}
	
	////in username, if username exists redirect to welcome, have the loadState within there too

	render(){

		return(
			<Router>
			<div className="app">
				<header>
					<Header />
					<DeleteStorage />
				</header>
				<main>
					<Switch>
						<Route path='/welcome' component={Welcome} />		
	 					<Route path='/username' component={User} />
						<Route path='/quiz' component={Quiz} />
						<Route exact path='/' component={Welcome} />
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
			</Router>
		)
	}
}


const mapStateToProps= state =>({
	name: state.name,
	index: state.index
})

export default connect(mapStateToProps)(App);

///the one that works with Victor:


						// <PrivateRoute exact path='/' component={Welcome} />


///within the render:
		//this.usernameExists = (typeof this.username !== 'undefined' && this.username !== null)
		// this.userNameExists = true;


	// componentWillMount(){
	// 	// this.username = loadState();
	// 	// console.log(`user name exists: ${this.username}`); 
	// 	// this.usernameExists = (typeof this.username !== 'undefined' || this.username !== null)
	// 	// console.log(`user nameExists Boolean: ${this.usernameExists}`); 
	// }



///other things tried:

// <Route history={browserHistory} render={(usernameExists)=>{
// 						if(this.usernameExists){
// 							console.log('user found');
// 							///if the user is found, send them to the welcome page
// 							return(
// 								<Redirect path='/welcome' component={Welcome} />
// 							)
// 						}else{
// 							console.log('the user component should display');
// 							///if there is not a user found, send them to the user component
// 							return(
// 								<Redirect to='/username' component={User}/>
// 							)
// 						}
// 					}}/>	




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