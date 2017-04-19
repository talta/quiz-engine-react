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


export default class App extends React.Component {
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	};

	handleChange(event){
		this.setState({value: event.target.value});
	}

	handleSubmit(event){
		const selectedQuiz = this.state.value;
		event.preventDefault();
	}

//////map through the quizzes to display as options within select:
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label> Test your chops with one of the following quizzes:
					<select value={this.state.value} onChange={this.handleChange} >

					</select>
				</label>
				<input type="submit" value="select" />
				</form>
			</div>
		)
	}
	
}