import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';
import styles from './css/App.css';

import {selectAnswer, incrementScore, incrementCounter} from '../actions';


export class Question extends React.Component{
  constructor(props, context){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
    this.router=context.router;
  }

  storeAnswer(input) {
    this.props.dispatch(selectAnswer(input));
  }
  
  handleClick(event){
    event.preventDefault();
    if(this.props.answerValue === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
      console.log('correct answer selected');
      this.props.dispatch(incrementScore());
    }
    if(this.props.currentIndex+1 === this.props.selectedQuiz.questions.length){
      console.log('reached the end of the quiz');
      this.router.history.push('/results');
    }else{
      this.props.dispatch(incrementCounter());
    }
  }


	render(){
    let question = this.props.selectedQuiz.questions[this.props.currentIndex]
    console.log('QUESTION: ', question)
		return (

      <div className='questions'>
          <div>
            <h3 id='question' className='questionName'>Question:{question.question}</h3>
          </div>
          <QuestionAnswer question={question} 
                          grabAnswer={input => this.storeAnswer(input)} />
          <button onClick={this.handleClick} 
                  className='nextQuestionButton'>Next Question!
          </button>
      </div>
    )
	}
};


const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz, currentIndex, answerValue, currentQuestion, score}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex, answerValue, currentQuestion, score}
};


Question.contextTypes={router:PropTypes.object}

export default connect(mapStateToProps)(Question);


