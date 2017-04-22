import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes, saveUser} from '../actions';

// import {Route, Redirect} from 'react-router-dom';
import {loadStorage} from '../helpers/localStorage';


export class Welcome extends React.Component {
	constructor(props, context){
		super(props);
		this.router=context.router;
		this.handleChange=this.handleChange.bind(this);
		this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
	};

	handleChange(event){
		///change this to an action
		this.setState({value: event.target.value});
	}

////route the user to the selected quiz:
	handleSelectedQuiz(event){
		let selectedQuiz = this.props.name;
		event.preventDefault();
		/////potential to set the selected quiz into the state
		this.router.history.push(`/quiz:${selectedQuiz}`);
	}
	
	componentDidMount(){
	    const username = loadStorage();
	    if (username !== undefined && username !== null){
	    	this.props.dispatch(fetchQuizzes());
	    	this.props.dispatch(saveUser(username));
	    }
	    else{
	    	this.router.history.push('/username');
	    }
	}

//////map through the quizzes to display as options within select:
	render(){

		return (
			<div>
				<div>
					<h2>Welcome {this.props.username},
					</h2>
				</div>
				<form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
					<label> Test your chops with one of the following quizzes: 
					<select value={this.props.name} onChange={this.handleChange}>
						<option value={this.props.name} > {this.props.name}</option>
					</select>
				</label>
				<button type="submit" value="submit"> Select Quiz</button>
				</form>
			</div>
		)
	}
};

const mapStateToProps=state=>({
	username: state.userReducer.username,
	name: state.quizAPI.name,

});

///if using history.push, pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);



///historyJS file, import the history.push, 



	// to take the place of the options, once multiple documents are being brought into

		// {this.props.name.map((quizName, index)=>(
		// 				<div key={index}>
		// 					<option value={quizName} onChange={this.handleChange}> {quizName}</option>
		// 				</div>
		// 				)
						
		// 			)};



// ////an example of mapping:
// {this.props.answers.map((answer, i)=>(
//             <div key={i}> 
//             <input onChange={input => this.props.storeAnswer({id: `question: ${i}`, answer: answer.message})} type="radio" name="answer" id={`answer${i}`} /><label>{answer.message}</label><br />
//             </div> 


					// {this.props.answers.map((name, index)=>{
					// 	<div key={index}>
					// 		<select value={this.state.name} onChange={this.handleChange}> </select>
					// 	</div>
					// })}	



/////
