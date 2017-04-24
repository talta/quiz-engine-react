import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends Component{

  render(){
	console.log('Quiz Counter Props: ', this.props)

	return (
		<div>
			 Quiz Counter:{this.props.selectedQuiz.Counter} out of {this.props.selectedQuiz.questions.length}
		</div>
	)  	
  }
}

const mapStateToProps=(state)=>{
	const {questions, index} = state.quizAPI;
  	const {selectedQuiz}= state.quizReducer;
	return  {questions, index, selectedQuiz}
};

export default connect(mapStateToProps)(QuizCounter);