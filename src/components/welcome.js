import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes} from '../actions';
import store from '../store';

export class Welcome extends React.Component {
	constructor(props, context){
		super(props);
		this.router=context.router;
		this.handleChange=this.handleChange.bind(this);
		this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
		// this.state = {}
	};

	handleChange(event){
		///change this to an action
		this.setState({value: event.target.value});
	}

////route the user to the selected quiz:
	handleSelectedQuiz(event){
		let selectedQuiz = this.state.value;
		event.preventDefault();
		console.log(selectedQuiz, 'this would be the selected Quiz');
		this.router.history.push(`/quiz`);
		// this.router.history.push(`/quiz:{selectedQuiz}`); ///future enhancement
	}
	componentDidMount(){
	    console.log('welcome compoennt mounted');
	    store.dispatch(fetchQuizzes);
	    console.log(store.getState(), 'this is the state that does not contain the name');
	    console.log(this.props);
	}

//////map through the quizzes to display as options within select:
	render(){
		return (
			<div>
				<form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
					<label> Test your chops with one of the following quizzes: 
					<select value={this.props.name} onChange={this.handleChange}> </select>
				</label>
				<button type="submit" value="submit"> Select Quiz</button>
				</form>
			</div>
		)
	}
};

const mapStateToProps=state=>({
	name: state.name,
	index: state.index
});

///pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Welcome);



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
