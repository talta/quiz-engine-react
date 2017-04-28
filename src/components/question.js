import React from 'react';
import {connect} from 'react-redux';

import QuestionAnswer from './question-answers';
import QuizCounter from './quiz-counter';

import {selectAnswer, incrementScore} from '../actions';


export class Question extends React.Component{
    answer = 0
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.storeAnswer = this.storeAnswer.bind(this);
  }

  storeAnswer(input) {

    console.log('Store Answer Input: ', input);
    // this.props.dispatch(selectAnswer(input))
    this.answer = input;
    let selectedAnswer = this.answer;
    console.log('selectedAnswer: ', selectedAnswer);
    console.log('index answer: ', this.props.selectedQuiz.questions[this.props.currentIndex].answer);
    if(selectedAnswer === this.props.selectedQuiz.questions[this.props.currentIndex].answer){
      console.log('correct answer selected');
      console.log('Score:', this.props.score)
      this.props.dispatch(incrementScore());
      
    }


  }
  
  handleClick(i){
    event.preventDefault();
    console.log('Question handle click called');
    console.log('handleClick key:', i)
    this.props.onNext(i)
    
  }

	render(){
    console.log('Question CHILDREN: ', this.props)
    console.log('selectedQuiz', this.props.selectedQuiz);
    console.log('stored answer: ', this.props.input);
		return (

      <div>
        <QuizCounter selectedQuiz={this.props.selectedQuiz}/>
        Current Question:

            <div> 
              {this.props.selectedQuiz.questions.map((question, i)=>(
                  <div key={i}>
                    <h3 id='question'>
                      Question: {question.question}
                    </h3>
                    <QuestionAnswer question={question} 
                                    grabAnswer={input => this.storeAnswer(input)} />
                    <button onClick={this.handleClick(i)}>
                      Next Question!
                    </button>
                  </div> 
              ))}
            </div>
      </div>
    ) 
	}
};

const mapStateToProps=state=>{
  const {quizzes}= state.quizAPI;
  const {selectedQuiz, currentIndex, selectedAnswer, currentQuestion, score}= state.quizReducer;
  return {quizzes, selectedQuiz, currentIndex, selectedAnswer, currentQuestion, score}
};

export default connect(mapStateToProps)(Question);


//// <QuestionAnswer storeAnswer={input => this.props.storeAnswer(input)} />

