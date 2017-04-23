import React, {Component} from 'react';
import {connect} from 'react-redux';

export class QuizCounter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
	console.log('Quiz Counter Props: ', this.props)

	return (
		<div>
			 Quiz Counter:{this.props.index} out of this.props.questions.length
		</div>
	)  	
  }
}


const mapStateToProps=(state)=>{
	const {questions, index} = state.quizAPI;
	return  {questions, index}
};

export default connect(mapStateToProps)(QuizCounter);