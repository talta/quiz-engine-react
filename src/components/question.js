import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';

export class Question extends React.Component{

	render(){
		return (
          	<div> 
            	<h3 id='question'>Question: {this.props.question}</h3>
                <QuestionAnswer />
          	</div>
		)
	}
};


const mapStateToProps=state=>({
  question: state.quizReducer.question,
  answers: state.quizReducer.answers
});


export default connect(mapStateToProps)(Question);