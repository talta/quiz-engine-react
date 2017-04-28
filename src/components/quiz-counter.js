import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends Component{

  render(){
	return (
		<div>
			<div>
				 Quiz Counter:{this.props.currentQuestion} out of {this.props.selectedQuiz.questions.length}
			</div>
		</div>
	)  	
  }
}

const mapStateToProps=(state)=>{
	const {questions, index} = state.quizAPI;
  	const {selectedQuiz, currentQuestion}= state.quizReducer;
	return  {questions, index, selectedQuiz, currentQuestion}
};

export default connect(mapStateToProps)(QuizCounter);