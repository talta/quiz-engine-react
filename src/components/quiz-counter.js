import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends Component{

  render(){
  	console.log('counter props: ', this.props);
  	console.log('counter currentQuestion: ', this.props.currentQuestion);
	return (
		<div>
			<div>
				 Quiz Counter: {this.props.currentQuestion+1} out of {this.props.selectedQuiz.questions.length}
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