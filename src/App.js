import React from 'react';
import {
		BrowserRouter as Router,
		Route,
		// browserHistory,
		// Redirect,
		Switch
		} 
from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import User from './components/user';
import Welcome from './components/welcome';


export class App extends React.Component{
	constructor(props){
		super(props);
		this.username = null;
		this.usernameExists = false;
	}


	render(){
		return(
			<Router>
			<div className="app">
				<header>
					<Header />
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


const mapStateToProps= state =>{
	const {name, index, question, answers, questions} = state.quizAPI;
	const {selectedQuiz} = state.quizReducer;

	return {name, index, questions, question, answers, selectedQuiz}
}

export default connect(mapStateToProps)(App);
