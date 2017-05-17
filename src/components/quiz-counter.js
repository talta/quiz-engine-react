import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends Component{

  render(){
	return (
		<div>
			<div>
				 Quiz Counter: {this.props.currentIndex+1} out of {this.props.selectedQuiz.questions.length}
			</div>
		</div>
	)  	
  }
}

const mapStateToProps=(state)=>{
  	const {selectedQuiz, currentQuestion, currentIndex}= state.quizReducer;
	return  {selectedQuiz, currentQuestion, currentIndex}
};

export default connect(mapStateToProps)(QuizCounter);