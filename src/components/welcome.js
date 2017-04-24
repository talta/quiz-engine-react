import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes, saveUser, selectQuiz} from '../actions';

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
		event.preventDefault();
		let selectedQuiz = this.props.name;
		
		/////potential to set the selected quiz into the state
		console.log('selected quiz before action: ', selectedQuiz);
		this.props.dispatch(selectQuiz(selectedQuiz));
		console.log('welcome props after selected quiz action: ', this.props.selectedQuiz)


		// this.router.history.push(`/quiz:${selectedQuiz}`);

		this.router.history.push({
			pathname: `/quiz`,
			state:{selectedQuiz: this.props.selectedQuiz}

		});
	}
	
	componentWillMount(){
	    const username = loadStorage();
	    if (username !== undefined && username !== null){
	    	this.props.dispatch(fetchQuizzes());
			console.log('Welcome props before username: ', this.props);
	    	this.props.dispatch(saveUser(username));
	    }
	    else{
	    	this.router.history.push('/username');
	    }
	    console.log('Welcome props after username: ', this.props);
	}


//////map through the quizzes to display as options within select:
	render(){
		console.log('all props: ', this.props)
		
		return (
			<div>
				<div>
					<h2>Welcome {this.props.username},
					</h2>
				</div>
				<form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
					<label> Test your chops with one of the following quizzes: 

					<select value={this.props.name} onChange={this.handleChange}>

					{this.props.quizzes.map((quizName, index)=>(
							<option key={index} value={quizName.name} onChange={this.handleChange}> {quizName.name}</option>
						)
					)}
					</select>
				</label>
				<button type="submit" value="submit"> Select Quiz</button>
				</form>
			</div>
		)
	}
};

 // const mapStateToProps = (state)=>({
 // 	quizzes: state.quizAPI.quizzes,
	// username: state.userReducer.username,
	// selectedQuiz: state.quizReducer.selectedQuiz
 // })

const mapStateToProps=(state)=>{
	console.log('this is the state before we map it: ', state.quizAPI);
	const {quizzes} = state.quizAPI;
	const {username} = state.userReducer;
	const {selectedQuiz}= state.quizReducer;
	return {quizzes, username, selectedQuiz} 
};
//console.log(mapStateToProps);

///if using history.push, pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);


////<option value={this.props.loadedQuizzes.quizzes[0].name} > {this.props.loadedQuizzes.quizzes[0].name}</option>
// <option value={this.props.quizzes[0].name} > {this.props.quizzes[0].name}</option>
//<option value={this.props.quizzes} > {this.props.quizzes}</option>

	// to take the place of the options, once multiple documents are being brought into

		// {this.props.name.map((quizName, index)=>(
		// 				<div key={index}>
		// 					<option value={quizName} onChange={this.handleChange}> {quizName}</option>
		// 				</div>
		// 				)
						
		// 			)};

					// 					{this.props.quizzes.map((quizName, index)=>(
					// 	<div key={index}>
					// 		<option value={quizName} onChange={this.handleChange}> {quizName}</option>
					// 	</div>
					// 	)
						
					// )};

						// 

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
