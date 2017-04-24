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

	handleChange(key){
		// ///change this to an action
		// this.setState({value: event.target.value});
		let selectedQuiz = (event.target.value)

		console.log('selectedQuiz target: ', event.target);
		console.log('selectedQuiz key: ', event.target.getAttribute('key') );
		console.log('selectedQuiz this.ID: ', this.id)
		console.log('selectedQuiz ID: ', event.target.getAttribute('id') );

		// console.log('selected with getNames key: ', event.target.attributes.getNamedItem('key').value)

		console.log('selected quiz before action: ', selectedQuiz);
		this.props.dispatch(selectQuiz(selectedQuiz))
	}

////route the user to the selected quiz:
	handleSelectedQuiz(event){
		event.preventDefault();

		////store the selected Quiz Variable to the state
		let selectedQuiz = this.props.selectedQuiz;
		console.log('selected quiz before action: ', selectedQuiz);
		this.props.dispatch(selectQuiz(selectedQuiz));
		console.log('welcome props after selected quiz action: ', this.props.selectedQuiz)

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
		// console.log('quizzes first quiz ID: ', this.props.quizzes[0]._id)
		
		return (
			<div>
				<div>
					<h2>Welcome {this.props.username},
					</h2>
				</div>
				<form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
					<label> Test your chops with one of the following quizzes: 

					<select onChange={()=>this.handleChange()}>

					{this.props.quizzes.map((quiz, index)=>(
							<option key={index} 
									id={quiz._id}
									value={quiz.index} > 
							{quiz.name}
							</option>
					))}
					</select>
				</label>
				<button type="submit" value="submit"> Select Quiz</button>
				</form>
			</div>
		)
	}
};


///set the first quizID to be the selected Quiz:



const mapStateToProps=(state)=>{
	console.log('this is the state before we map it: ', state.quizAPI);

	const {quizzes} = state.quizAPI;
	const {username} = state.userReducer;
	const {selectedQuiz}= state.quizReducer;
	return {quizzes, username, selectedQuiz} 
};

///if using history.push, pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);

