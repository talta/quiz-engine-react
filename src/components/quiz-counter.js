import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends Component{

  render(){
	console.log('Quiz Counter Props: ', this.props)

	console.log('Counter current Index: ', this.props.selectedQuiz.currentIndex);

	return (
		<div>
			 Quiz Counter:{this.props.currentIndex} out of {this.props.selectedQuiz.questions.length}
		</div>
	)  	
  }
}

const mapStateToProps=(state)=>{
	const {questions, index} = state.quizAPI;
  	const {selectedQuiz, currentIndex}= state.quizReducer;
	return  {questions, index, selectedQuiz, currentIndex}
};

export default connect(mapStateToProps)(QuizCounter);