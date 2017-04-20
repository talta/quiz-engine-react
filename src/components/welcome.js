import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchQuizzes} from '../actions';


/////Ric:
/////how would i then encorporate the props into this context declaration:



export class Welcome extends React.Component {
	constructor(props, context){
		super(props);
		this.router=context.router;
		this.handleChange=this.handleChange.bind(this);
		this.handleSelectedQuiz=this.handleSelectedQuiz.bind(this);
		this.state = {value: "quiz1"}
	};

	handleChange(event){
		this.setState({value: event.target.value});
	}

////route the user to the selected quiz:
	handleSelectedQuiz(event){
		let selectedQuiz = this.state.value;
		event.preventDefault();
		console.log(selectedQuiz, 'this would be the selected Quiz');
		this.router.history.push(`/quiz`);
		// this.router.history.push(`/quiz:{selectedQuiz}`);
	}
	componentDidMount(){
	    console.log('compoennt mounted');
	    this.props.dispatch(fetchQuizzes);
	}

//////map through the quizzes to display as options within select:
	render(){
		return (
			<div>
				<form onSubmit={this.handleSelectedQuiz} id='selectQuiz'>
					<label> Test your chops with one of the following quizzes:
					<select value={this.state.value} onChange={this.handleChange}>
					</select>
				</label>
				<button type="submit" value="submit"> Select Quiz</button>
				</form>
			</div>
		)
	}
};


/////
const mapStateToProps=state=>({
	name: state.name
});

///pass the router through proptypes
Welcome.contextTypes={router:PropTypes.object}

// export default connect(mapStateToProps)(Welcome);



export default connect(mapStateToProps)(Welcome);



